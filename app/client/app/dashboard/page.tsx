import Link from 'next/link'

const widgets = [
  { title: 'Upcoming Appointments', value: '2' },
  { title: 'Medical Records', value: '6' },
  { title: 'Notifications', value: '3' },
]

export default function DashboardPage() {
  return (
    <main className='min-h-screen bg-slate-100 p-6'>
      {/* Navigation */}
      <nav className='border-b bg-white'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5'>
          <Link href='/' className='text-2xl font-bold text-emerald-700'>
            AegisCare
          </Link>

          <div className='flex items-center gap-4'>
            <Link
              href='/learn-more'
              className='rounded-lg px-4 py-2 hover:bg-slate-100'
            >
              Learn More
            </Link>

            <Link
              href='/explore-platform'
              className='rounded-lg bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700'
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </nav>

      <div className='mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-sm'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-sm uppercase tracking-[0.2em] text-emerald-700'>
              AegisCare Patient Dashboard
            </p>
            <h1 className='mt-2 text-3xl font-bold'>Welcome back, Ava</h1>
          </div>
          <div className='rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white'>
            Patient Role
          </div>
        </div>

        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          {widgets.map((item) => (
            <div
              key={item.title}
              className='rounded-xl border border-slate-200 p-5'
            >
              <p className='text-sm text-slate-500'>{item.title}</p>
              <p className='mt-3 text-3xl font-bold'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
