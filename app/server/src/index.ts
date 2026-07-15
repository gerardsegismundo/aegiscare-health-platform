import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import multer from 'multer'
import { env } from './config/env.js'
import { query } from './config/db.js'
import { signToken } from './utils/jwt.js'
import { hashPassword, verifyPassword } from './utils/password.js'
import { requireAuth, requireRole } from './middleware/auth.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'
import { DocumentStorageService } from './services/documentStorage.js'

const app = express()
const upload = multer({ storage: multer.memoryStorage() })
const documentService = new DocumentStorageService()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'cloudcare-backend' })
})

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body as { email: string; password: string }

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  const rows = await query<{
    id: string
    name: string
    email: string
    password_hash: string
    role: string
  }>(
    'SELECT id, name, email, password_hash, role FROM users WHERE email = $1',
    [email]
  )

  const user = rows[0]
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const valid = await verifyPassword(password, user.password_hash)
  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  await query(
    'INSERT INTO audit_logs (user_id, action, resource, timestamp) VALUES ($1, $2, $3, NOW())',
    [user.id, 'login', 'users']
  )

  const token = signToken({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role as 'patient' | 'doctor' | 'admin',
  })

  return res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  })
})

app.post('/api/auth/register', async (req, res) => {
  const {
    name,
    email,
    password,
    role = 'patient',
  } = req.body as {
    name: string
    email: string
    password: string
    role?: string
  }

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: 'Name, email, and password are required' })
  }

  const passwordHash = await hashPassword(password)

  const userResult = await query<{ id: string }>(
    'INSERT INTO users (name, email, password_hash, role, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING id',
    [name, email, passwordHash, role]
  )

  const userId = userResult[0].id

  if (role === 'patient') {
    await query(
      'INSERT INTO patients (user_id, date_of_birth, phone, address) VALUES ($1, NOW(), $2, $3)',
      [userId, '', '']
    )
  }

  res.status(201).json({ message: 'User created', userId })
})

app.get('/api/profile', requireAuth, async (req, res) => {
  const profile = await query<{
    id: string
    name: string
    email: string
    role: string
  }>('SELECT id, name, email, role FROM users WHERE id = $1', [req.user!.id])

  res.json(profile[0])
})

app.get('/api/appointments', requireAuth, async (req, res) => {
  const rows = await query(
    'SELECT id, patient_id, doctor_id, appointment_date, status, notes FROM appointments ORDER BY appointment_date ASC'
  )

  res.json(rows)
})

app.post('/api/appointments', requireAuth, async (req, res) => {
  const { patientId, doctorId, appointmentDate, notes } = req.body as {
    patientId: string
    doctorId: string
    appointmentDate: string
    notes?: string
  }

  const result = await query<{ id: string }>(
    'INSERT INTO appointments (patient_id, doctor_id, appointment_date, status, notes) VALUES ($1, $2, $3, $4, $5) RETURNING id',
    [patientId, doctorId, appointmentDate, 'scheduled', notes ?? '']
  )

  await query(
    'INSERT INTO audit_logs (user_id, action, resource, timestamp) VALUES ($1, $2, $3, NOW())',
    [req.user!.id, 'appointment_created', 'appointments']
  )

  res.status(201).json({ id: result[0].id, message: 'Appointment created' })
})

app.patch('/api/appointments/:id/status', requireAuth, async (req, res) => {
  const { status } = req.body as { status: string }
  const { id } = req.params

  await query('UPDATE appointments SET status = $1 WHERE id = $2', [status, id])

  await query(
    'INSERT INTO audit_logs (user_id, action, resource, timestamp) VALUES ($1, $2, $3, NOW())',
    [req.user!.id, 'appointment_status_updated', 'appointments']
  )

  res.json({ message: 'Appointment status updated' })
})

app.get('/api/medical-records', requireAuth, async (_req, res) => {
  const rows = await query(
    'SELECT id, patient_id, doctor_id, diagnosis, notes, created_at FROM medical_records ORDER BY created_at DESC'
  )

  res.json(rows)
})

app.post(
  '/api/medical-records',
  requireAuth,
  requireRole(['doctor', 'admin']),
  async (req, res) => {
    const { patientId, doctorId, diagnosis, notes } = req.body as {
      patientId: string
      doctorId: string
      diagnosis: string
      notes: string
    }

    const result = await query<{ id: string }>(
      'INSERT INTO medical_records (patient_id, doctor_id, diagnosis, notes, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING id',
      [patientId, doctorId, diagnosis, notes]
    )

    await query(
      'INSERT INTO audit_logs (user_id, action, resource, timestamp) VALUES ($1, $2, $3, NOW())',
      [req.user!.id, 'medical_record_access', 'medical_records']
    )

    res
      .status(201)
      .json({ id: result[0].id, message: 'Medical record created' })
  }
)

app.get('/api/documents', requireAuth, async (_req, res) => {
  const rows = await query(
    'SELECT id, patient_id, filename, storage_path, uploaded_by, created_at FROM documents ORDER BY created_at DESC'
  )

  res.json(rows)
})

app.post(
  '/api/documents',
  requireAuth,
  upload.single('file'),
  async (req, res) => {
    const file = req.file
    const { patientId, uploadedBy } = req.body as {
      patientId: string
      uploadedBy: string
    }

    if (!file) {
      return res.status(400).json({ message: 'A file is required' })
    }

    const saved = await documentService.save(file)

    await query(
      'INSERT INTO documents (patient_id, filename, storage_path, uploaded_by, created_at) VALUES ($1, $2, $3, $4, NOW())',
      [patientId, saved.filename, saved.storagePath, uploadedBy || req.user!.id]
    )

    await query(
      'INSERT INTO audit_logs (user_id, action, resource, timestamp) VALUES ($1, $2, $3, NOW())',
      [req.user!.id, 'document_upload', 'documents']
    )

    res.status(201).json({ message: 'Document uploaded', document: saved })
  }
)

app.get(
  '/api/audit-logs',
  requireAuth,
  requireRole(['admin']),
  async (_req, res) => {
    const rows = await query(
      'SELECT id, user_id, action, resource, timestamp FROM audit_logs ORDER BY timestamp DESC'
    )
    res.json(rows)
  }
)

app.get(
  '/api/admin/stats',
  requireAuth,
  requireRole(['admin']),
  async (_req, res) => {
    const [users, appointments, documents] = await Promise.all([
      query<{ count: number }>('SELECT COUNT(*)::int AS count FROM users'),
      query<{ count: number }>(
        'SELECT COUNT(*)::int AS count FROM appointments'
      ),
      query<{ count: number }>('SELECT COUNT(*)::int AS count FROM documents'),
    ])

    res.json({
      users: users[0]?.count ?? 0,
      appointments: appointments[0]?.count ?? 0,
      documents: documents[0]?.count ?? 0,
    })
  }
)

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(env.port, () => {
  console.log(`CloudCare API listening on http://localhost:${env.port}`)
})
