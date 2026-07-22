import { useState } from 'react'
import { TrendType } from '@/types/aegis'
import { MOCK_VITALS } from '@/constants/vitalsData'

export default function DashboardTab() {
  const [activeTrend, setActiveTrend] = useState<TrendType>('bp')
  const currentTrend = MOCK_VITALS[activeTrend]
  const areaPath = `${currentTrend.points} L 100 45 L 10 45 Z`

  return (
    <div className='grid grid-cols-12 gap-3 w-full items-stretch'>
      {/* Vitals Trends Card */}
      <div className='col-span-12 sm:col-span-7 bg-white rounded-xl border border-slate-200/90 p-3 flex flex-col justify-between shadow-xs'>
        <div className='flex items-start justify-between gap-1.5 shrink-0'>
          <div>
            <h3 className='text-[7px] font-black text-slate-900 uppercase tracking-wider font-mono'>
              TELEMETRY CHANNELS
            </h3>
            <p className='text-[6px] text-slate-400 leading-none mt-0.5'>
              Continuous stream metrics.
            </p>
          </div>
          <div className='flex p-0.5 bg-slate-100/80 border border-slate-200/40 rounded-lg shrink-0'>
            {(['bp', 'weight', 'glucose'] as TrendType[]).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTrend(t)}
                className={`px-2 py-0.5 text-[6px] font-black rounded-md transition-all capitalize ${
                  activeTrend === t
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {t === 'glucose' ? 'Gl' : t === 'weight' ? 'Wt' : 'BP'}
              </button>
            ))}
          </div>
        </div>

        {/* Vector Chart */}
        <div className='relative pt-4 flex-grow flex flex-col justify-end'>
          <div className='absolute top-0 right-0 text-right'>
            <span className={`text-[16px] font-black ${currentTrend.colorClass} block leading-none`}>
              {currentTrend.value}
            </span>
            <span className='text-[6px] font-bold font-mono text-slate-400 block leading-none mt-0.5'>
              {currentTrend.unit} (Latest)
            </span>
          </div>

          <svg viewBox='0 0 110 48' className='w-full overflow-visible mt-2'>
            <line x1='10' y1='10' x2='100' y2='10' stroke='#f1f5f9' strokeWidth='0.5' />
            <line x1='10' y1='25' x2='100' y2='25' stroke='#f1f5f9' strokeWidth='0.5' />
            <line x1='10' y1='40' x2='100' y2='40' stroke='#e2e8f0' strokeWidth='0.75' />

            <path d={areaPath} fill={currentTrend.fillGradient} className='transition-all duration-500 ease-in-out' />

            <path
              d={currentTrend.points}
              fill='none'
              stroke={currentTrend.strokeColor}
              strokeWidth='1.75'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='transition-all duration-500 ease-in-out'
              style={{ filter: `drop-shadow(0px 3px 6px ${currentTrend.glowColor})` }}
            />

            {/* Highlight current pulsing metrics dot */}
            <circle cx='100' cy='22' r='2.5' className='fill-indigo-600 stroke-white' strokeWidth='1.2' />
            <circle cx='100' cy='22' r='4' className='stroke-indigo-600 fill-none animate-pulse' strokeWidth='0.5' />

            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m, idx) => (
              <text key={idx} x={10 + idx * 18} y='47' textAnchor='middle' className='text-[5px] font-bold fill-slate-400 font-mono'>
                {m}
              </text>
            ))}

            <defs>
              <linearGradient id='bp-gradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#6366f1' stopOpacity='0.2' />
                <stop offset='100%' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient id='weight-gradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#06b6d4' stopOpacity='0.2' />
                <stop offset='100%' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient id='glucose-gradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#10b981' stopOpacity='0.2' />
                <stop offset='100%' stopColor='white' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Timeline Card */}
      <div className='col-span-12 sm:col-span-5 bg-white rounded-xl border border-slate-200/90 p-3 flex flex-col justify-between shadow-xs'>
        <div>
          <h3 className='text-[7px] font-black text-slate-900 uppercase tracking-wider font-mono'>
            ACTIVE SCHEDULE
          </h3>
        </div>
        <div className='relative pl-3 space-y-3.5 before:absolute before:left-[5px] before:top-1 before:bottom-1 before:w-[0.75px] before:bg-slate-200/80 flex-grow mt-3'>
          <div className='relative'>
            <span className='absolute left-[-11px] top-0.5 flex h-2 w-2 items-center justify-center rounded-full bg-indigo-100 ring-2 ring-white'>
              <span className='h-1.5 w-1.5 rounded-full bg-indigo-600' />
            </span>
            <div className='space-y-1'>
              <span className='inline-block text-[5px] font-mono font-black text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded-sm scale-[0.9] origin-left'>
                UPCOMING
              </span>
              <h4 className='text-[8px] font-extrabold text-slate-900 leading-none'>Consultation</h4>
              <p className='text-[6.5px] text-slate-400 leading-none'>Dr. Jenkins • Jul 24, 2026</p>
            </div>
          </div>

          <div className='relative'>
            <span className='absolute left-[-11px] top-0.5 flex h-2 w-2 items-center justify-center rounded-full bg-slate-200 ring-2 ring-white'>
              <span className='h-1.5 w-1.5 rounded-full bg-slate-400' />
            </span>
            <div className='space-y-1'>
              <span className='inline-block text-[5px] font-mono font-black text-slate-500 bg-slate-100 px-1 py-0.5 rounded-sm scale-[0.9] origin-left'>
                COMPLETED
              </span>
              <h4 className='text-[8px] font-extrabold text-slate-700 leading-none'>Annual Wellness</h4>
              <p className='text-[6.5px] text-slate-400 leading-none'>Complete exam • May 12, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}