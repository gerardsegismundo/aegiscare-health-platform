'use client'

import { useState } from 'react'
import Link from 'next/link'

type TrendType = 'bp' | 'weight' | 'glucose'

interface TrendData {
  title: string
  unit: string
  points: number[]
  labels: string[]
  color: string
  fill: string
}

interface Coordinate {
  x: number
  y: number
  value: number
}

export default function PatientDashboard() {
  const [activeTrend, setActiveTrend] = useState<TrendType>('bp')

  // Mock Trend Data for pure SVG rendering
  const trendData: Record<TrendType, TrendData> = {
    bp: {
      title: 'Blood Pressure History',
      unit: 'mmHg (Systolic)',
      points: [118, 122, 115, 120, 110, 118],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      color: 'stroke-indigo-600',
      fill: 'from-indigo-500/20',
    },
    weight: {
      title: 'Weight Changes',
      unit: 'lbs',
      points: [185, 183, 181, 182, 179, 178],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      color: 'stroke-cyan-500',
      fill: 'from-cyan-500/20',
    },
    glucose: {
      title: 'Blood Glucose (Fasting)',
      unit: 'mg/dL',
      points: [98, 102, 95, 99, 92, 94],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      color: 'stroke-emerald-500',
      fill: 'from-emerald-500/20',
    },
  }

  const currentTrend = trendData[activeTrend]

  // Map arbitrary health values to SVG vertical viewbox coordinates (y-axis: 0 to 100)
  const getSVGCoordinates = (points: number[]): Coordinate[] => {
    const min = Math.min(...points) - 5
    const max = Math.max(...points) + 5
    return points.map((p: number, i: number) => {
      const x = (i / (points.length - 1)) * 300 + 10 // x coordinates 10 to 310
      const y = 90 - ((p - min) / (max - min)) * 80 // y coordinates scaled to fit height
      return { x, y, value: p }
    })
  }

  const coords: Coordinate[] = getSVGCoordinates(currentTrend.points)
  const linePath = coords
    .map((c: Coordinate, i: number) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`)
    .join(' ')
  const areaPath = `${linePath} L ${coords[coords.length - 1].x} 95 L ${coords[0].x} 95 Z`

  return (
    <div className='p-6 md:p-8 space-y-8 max-w-5xl mx-auto'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200'>
        <div>
          <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
            Welcome back, Taena Mu
          </h1>
          <p className='text-slate-500 text-xs mt-1'>
            Your clinical vitals and treatment plan are fully updated.
          </p>
        </div>
        <div className='flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-1.5 self-start sm:self-auto'>
          <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
          <span className='text-[10px] font-bold text-emerald-800 font-mono uppercase tracking-wider'>
            HIPAA Secured
          </span>
        </div>
      </div>

      <div className='grid gap-6 lg:grid-cols-12'>
        {/* Left Column: Health Trends Visualization */}
        <div className='lg:col-span-8 space-y-6'>
          <div className='bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm space-y-6'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
              <div>
                <h3 className='text-sm font-black text-slate-900 uppercase tracking-wider font-mono'>
                  Personal Health Trends
                </h3>
                <p className='text-[11px] text-slate-400 mt-0.5'>
                  Visualize your vital telemetry over the last 6 months.
                </p>
              </div>

              {/* Vital Selector Tabs */}
              <div className='flex p-1 bg-slate-100 rounded-xl self-start'>
                <button
                  onClick={() => setActiveTrend('bp')}
                  className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all ${activeTrend === 'bp' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-550'}`}
                >
                  Blood Pressure
                </button>
                <button
                  onClick={() => setActiveTrend('weight')}
                  className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all ${activeTrend === 'weight' ? 'bg-white text-cyan-600 shadow-sm' : 'text-slate-550'}`}
                >
                  Weight
                </button>
                <button
                  onClick={() => setActiveTrend('glucose')}
                  className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all ${activeTrend === 'glucose' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-550'}`}
                >
                  Glucose
                </button>
              </div>
            </div>

            {/* SVG Line Chart Component */}
            <div className='relative pt-4'>
              <div className='absolute top-2 right-4 text-right'>
                <span className='text-2xl font-black text-slate-900'>
                  {coords[coords.length - 1].value}
                </span>
                <span className='text-[10px] font-mono text-slate-400 block'>
                  {currentTrend.unit} (Latest)
                </span>
              </div>

              <svg
                viewBox='0 0 320 100'
                className='w-full h-48 overflow-visible'
              >
                {/* Y-Axis Gridlines */}
                <line
                  x1='10'
                  y1='15'
                  x2='310'
                  y2='15'
                  stroke='#f1f5f9'
                  strokeWidth='1'
                />
                <line
                  x1='10'
                  y1='55'
                  x2='310'
                  y2='55'
                  stroke='#f1f5f9'
                  strokeWidth='1'
                />
                <line
                  x1='10'
                  y1='95'
                  x2='310'
                  y2='95'
                  stroke='#e2e8f0'
                  strokeWidth='1.5'
                />

                {/* Shaded Area Under Line */}
                <path
                  d={areaPath}
                  fill='url(#gradient-fill)'
                  className='transition-all duration-300'
                />

                {/* Connecting Trend Line */}
                <path
                  d={linePath}
                  fill='none'
                  className={`${currentTrend.color} transition-all duration-300`}
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />

                {/* Trend Interactive Data Points */}
                {coords.map((c: Coordinate, i: number) => (
                  <g key={i} className='group cursor-pointer'>
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r='4'
                      className='fill-white stroke-slate-900 transition-all duration-300 group-hover:r-5'
                      strokeWidth='2'
                    />
                    {/* Tiny Value Labels */}
                    <text
                      x={c.x}
                      y={c.y - 8}
                      textAnchor='middle'
                      className='text-[7px] font-black fill-slate-950 font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-white'
                    >
                      {c.value}
                    </text>
                  </g>
                ))}

                {/* Month Labels */}
                {coords.map((c: Coordinate, i: number) => (
                  <text
                    key={i}
                    x={c.x}
                    y='108'
                    textAnchor='middle'
                    className='text-[7px] font-bold fill-slate-400 font-mono'
                  >
                    {currentTrend.labels[i]}
                  </text>
                ))}

                <defs>
                  <linearGradient
                    id='gradient-fill'
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop
                      offset='0%'
                      stopColor={
                        activeTrend === 'bp'
                          ? '#6366f1'
                          : activeTrend === 'weight'
                            ? '#06b6d4'
                            : '#10b981'
                      }
                      stopOpacity='0.15'
                    />
                    <stop offset='100%' stopColor='white' stopOpacity='0.0' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Timeline Flow */}
        <div className='lg:col-span-4 space-y-6'>
          <div className='bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm space-y-6'>
            <div>
              <h3 className='text-sm font-black text-slate-900 uppercase tracking-wider font-mono'>
                Appointment Timeline
              </h3>
              <p className='text-[11px] text-slate-400 mt-0.5'>
                Chronological treatment outline.
              </p>
            </div>

            {/* Vertical timeline tree */}
            <div className='relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100'>
              {/* Node 1: Upcoming */}
              <div className='relative'>
                <span className='absolute left-[-21px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-100 ring-4 ring-white'>
                  <span className='h-2 w-2 rounded-full bg-indigo-600 animate-pulse' />
                </span>
                <div>
                  <span className='text-[9px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md'>
                    UPCOMING
                  </span>
                  <h4 className='text-xs font-bold text-slate-900 mt-1'>
                    Specialist Consultation
                  </h4>
                  <p className='text-[10px] text-slate-400'>
                    Dr. Jenkins • Jul 24, 2026
                  </p>
                </div>
              </div>

              {/* Node 2: Past Annual Checkup */}
              <div className='relative'>
                <span className='absolute left-[-21px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 ring-4 ring-white'>
                  <span className='h-2 w-2 rounded-full bg-slate-400' />
                </span>
                <div>
                  <span className='text-[9px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md'>
                    PAST VISIT
                  </span>
                  <h4 className='text-xs font-bold text-slate-700 mt-1'>
                    Annual Physical Wellness
                  </h4>
                  <p className='text-[10px] text-slate-400'>
                    Complete panel diagnostics • May 12, 2026
                  </p>
                </div>
              </div>

              {/* Node 3: Past Lab Test */}
              <div className='relative'>
                <span className='absolute left-[-21px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 ring-4 ring-white'>
                  <span className='h-2 w-2 rounded-full bg-slate-400' />
                </span>
                <div>
                  <span className='text-[9px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md'>
                    LAB TEST
                  </span>
                  <h4 className='text-xs font-bold text-slate-700 mt-1'>
                    Lipid & Metabolic Sync
                  </h4>
                  <p className='text-[10px] text-slate-400'>
                    Aegis Labs Inc • Jan 10, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
