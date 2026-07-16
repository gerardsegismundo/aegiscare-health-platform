'use client'

export default function ProviderDashboard() {
  const caseMetrics = [
    {
      label: 'Active Cases',
      count: 45,
      color: 'bg-indigo-600',
      width: 'w-[45%]',
    },
    {
      label: 'Follow-ups Needed',
      count: 18,
      color: 'bg-cyan-500',
      width: 'w-[18%]',
    },
    {
      label: 'Pending Audits',
      count: 12,
      color: 'bg-amber-500',
      width: 'w-[12%]',
    },
  ]

  const weeklyLoad = [
    { day: 'Mon', value: 80 },
    { day: 'Tue', value: 95 },
    { day: 'Wed', value: 50 },
    { day: 'Thu', value: 75 },
    { day: 'Fri', value: 65 },
  ]

  return (
    <div className='p-6 md:p-8 space-y-8 max-w-5xl mx-auto'>
      <div>
        <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
          Clinical Workspace Overview
        </h1>
        <p className='text-slate-500 text-xs mt-1'>
          Monitor provider performance profiles, patient volumes, and weekly
          schedules.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {/* Metric 1: Clinical Case Distro (Progress Bars) */}
        <div className='bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm space-y-4'>
          <div>
            <h3 className='text-sm font-black text-slate-900 uppercase tracking-wider font-mono'>
              Patient Status Balance
            </h3>
            <p className='text-[11px] text-slate-400 mt-0.5'>
              Assigned case priorities for this clinical workflow window.
            </p>
          </div>

          <div className='space-y-4 pt-2'>
            {caseMetrics.map((m, idx) => (
              <div key={idx} className='space-y-1.5'>
                <div className='flex justify-between text-xs font-bold text-slate-700'>
                  <span>{m.label}</span>
                  <span className='font-mono'>{m.count} patients</span>
                </div>
                <div className='w-full bg-slate-100 rounded-full h-2 overflow-hidden'>
                  <div
                    className={`h-full ${m.color} rounded-full`}
                    style={{ width: `${(m.count / 75) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metric 2: Appointment Analytics (Bar Chart) */}
        <div className='bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm space-y-4'>
          <div>
            <h3 className='text-sm font-black text-slate-900 uppercase tracking-wider font-mono'>
              Weekly Workload Distribution
            </h3>
            <p className='text-[11px] text-slate-400 mt-0.5'>
              Aggregated appointment counts tracked by working day.
            </p>
          </div>

          <div className='flex items-end justify-between h-40 pt-4 px-4 border-b border-slate-100'>
            {weeklyLoad.map((w, idx) => (
              <div
                key={idx}
                className='flex flex-col items-center gap-2 group w-full'
              >
                <div
                  className='w-8 bg-indigo-500/10 group-hover:bg-indigo-500/20 rounded-t-lg relative transition-all'
                  style={{ height: `${w.value}%` }}
                >
                  {/* Dynamic Inner Fill */}
                  <div
                    className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg transition-all'
                    style={{ height: '80%' }}
                  />
                </div>
                <span className='text-[10px] font-mono text-slate-400'>
                  {w.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
