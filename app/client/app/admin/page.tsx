'use client'

export default function AdminDashboard() {
  const platformStats = [
    { label: 'Total Users', val: '5,240', change: '+12% this month' },
    { label: 'Appointments Booked', val: '12,430', change: '+1,800' },
    {
      label: 'Encrypted Documents',
      val: '45,300',
      change: 'Zero leaks recorded',
    },
    { label: 'System Uptime', val: '99.98%', change: 'Healthy' },
  ]

  return (
    <div className='p-6 md:p-8 space-y-8 max-w-5xl mx-auto'>
      <div>
        <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
          System Administration Control
        </h1>
        <p className='text-slate-500 text-xs mt-1'>
          Audit security parameters, microservices status, and active platform
          profiles.
        </p>
      </div>

      {/* Numerical Cards */}
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {platformStats.map((stat, idx) => (
          <div
            key={idx}
            className='bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-1'
          >
            <span className='text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono'>
              {stat.label}
            </span>
            <p className='text-xl font-black text-slate-950 tracking-tight'>
              {stat.val}
            </p>
            <p className='text-[9px] font-bold text-indigo-600'>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className='grid gap-6 md:grid-cols-12'>
        {/* User Distribution Donut */}
        <div className='md:col-span-5 bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm space-y-6'>
          <div>
            <h3 className='text-sm font-black text-slate-900 uppercase tracking-wider font-mono'>
              User Composition
            </h3>
            <p className='text-[11px] text-slate-400 mt-0.5'>
              Audited global system profiles active in database.
            </p>
          </div>

          <div className='flex items-center justify-around gap-4 pt-2'>
            {/* SVG Progress Circle represent as donut */}
            <div className='relative h-28 w-28 shrink-0'>
              <svg
                viewBox='0 0 36 36'
                className='w-full h-full transform -rotate-90'
              >
                <circle
                  cx='18'
                  cy='18'
                  r='16'
                  fill='none'
                  stroke='#f1f5f9'
                  strokeWidth='4'
                />
                {/* 80% Patients (Indigo) */}
                <circle
                  cx='18'
                  cy='18'
                  r='16'
                  fill='none'
                  stroke='#4f46e5'
                  strokeWidth='4'
                  strokeDasharray='80 100'
                />
                {/* 15% Providers (Cyan) offset */}
                <circle
                  cx='18'
                  cy='18'
                  r='16'
                  fill='none'
                  stroke='#06b6d4'
                  strokeWidth='4'
                  strokeDasharray='15 100'
                  strokeDashoffset='-80'
                />
              </svg>
              <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <span className='text-lg font-black text-slate-900'>80%</span>
                <span className='text-[8px] text-slate-450 uppercase font-mono tracking-widest'>
                  Patients
                </span>
              </div>
            </div>

            {/* Legend Labels */}
            <div className='space-y-2'>
              <div className='flex items-center gap-2 text-xs'>
                <span className='w-2.5 h-2.5 rounded-full bg-indigo-600' />
                <span className='text-slate-650 font-bold'>Patients (80%)</span>
              </div>
              <div className='flex items-center gap-2 text-xs'>
                <span className='w-2.5 h-2.5 rounded-full bg-cyan-500' />
                <span className='text-slate-650 font-bold'>
                  Providers (15%)
                </span>
              </div>
              <div className='flex items-center gap-2 text-xs'>
                <span className='w-2.5 h-2.5 rounded-full bg-slate-300' />
                <span className='text-slate-650 font-bold'>Admins (5%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Events Sparkline */}
        <div className='md:col-span-7 bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm space-y-6'>
          <div>
            <h3 className='text-sm font-black text-slate-900 uppercase tracking-wider font-mono'>
              System Audit Ingestion
            </h3>
            <p className='text-[11px] text-slate-400 mt-0.5'>
              Ingested event triggers, logs, and authentication requests.
            </p>
          </div>

          <div className='pt-2'>
            {/* Sparkline visualization */}
            <svg viewBox='0 0 300 80' className='w-full h-24 overflow-visible'>
              <path
                d='M 10 70 Q 75 20, 150 45 T 290 10'
                fill='none'
                stroke='#4f46e5'
                strokeWidth='2.5'
                strokeLinecap='round'
              />
              <path
                d='M 10 70 Q 75 20, 150 45 T 290 10 L 290 80 L 10 80 Z'
                fill='url(#sparkline-fill)'
              />
              {/* Dynamic pointer nodes */}
              <circle
                cx='290'
                cy='10'
                r='4'
                fill='white'
                stroke='#4f46e5'
                strokeWidth='2'
              />

              <defs>
                <linearGradient id='sparkline-fill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#4f46e5' stopOpacity='0.1' />
                  <stop offset='100%' stopColor='white' stopOpacity='0.0' />
                </linearGradient>
              </defs>
            </svg>
            <div className='flex justify-between items-center text-[9px] font-bold uppercase font-mono text-slate-400 pt-3'>
              <span>00:00 (Zulu)</span>
              <span>12:00</span>
              <span>23:59 (Real-time active)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
