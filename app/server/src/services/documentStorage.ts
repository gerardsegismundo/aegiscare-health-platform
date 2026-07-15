import fs from 'fs/promises'
import path from 'path'
import { env } from '../config/env.js'

export interface StoredDocument {
  filename: string
  storagePath: string
}

export class DocumentStorageService {
  async save(file: Express.Multer.File): Promise<StoredDocument> {
    await fs.mkdir(env.uploadDir, { recursive: true })

    const finalPath = path.join(env.uploadDir, file.originalname)
    await fs.writeFile(finalPath, file.buffer)

    return {
      filename: file.originalname,
      storagePath: finalPath,
    }
  }
}
