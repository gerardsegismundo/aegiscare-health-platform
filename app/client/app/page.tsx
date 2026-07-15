const roles = ['Patient', 'Doctor', 'Admin']

const cards = [
  {
    title: 'Patient Dashboard',
    features: [
      'Profile',
      'Appointments',
      'Medical Records',
      'Documents',
      'Notifications',
    ],
  },
  {
    title: 'Doctor Dashboard',
    features: [
      'Assigned Patients',
      'Medical History',
      'Add Notes',
      'Update Status',
    ],
  },
  {
    title: 'Admin Dashboard',
    features: ['System Statistics', 'User Management', 'Activity Logs'],
  },
]

export default function HomePage() {
  return (
    <main className='min-h-screen bg-slate-100 p-6 text-slate-900'>
      <div className='mx-auto max-w-6xl'>
        <section className='rounded-2xl bg-white p-8 shadow-sm'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>
                AegisCare
              </p>
              <h1 className='mt-2 text-4xl font-bold'>Healthcare Portal</h1>
              <p className='mt-3 max-w-2xl text-slate-600'>
                A clean MVP for a HIPAA-oriented patient portal with role-based
                access, appointment management, and document handling.
              </p>
            </div>
            <div className='rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800'>
              Future-ready for AWS: ECS/EKS, RDS, S3, Cognito, Secrets Manager,
              CloudWatch
            </div>
          </div>
        </section>

        <section className='mt-8 grid gap-4 md:grid-cols-3'>
          {cards.map((card) => (
            <article
              key={card.title}
              className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'
            >
              <h2 className='text-xl font-semibold'>{card.title}</h2>
              <ul className='mt-4 space-y-2 text-sm text-slate-700'>
                {card.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className='mt-8 grid gap-4 md:grid-cols-3'>
          {roles.map((role) => (
            <div
              key={role}
              className='rounded-2xl bg-slate-900 p-5 text-white shadow-sm'
            >
              <p className='text-sm uppercase tracking-[0.2em] text-slate-300'>
                Role
              </p>
              <p className='mt-2 text-2xl font-semibold'>{role}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
