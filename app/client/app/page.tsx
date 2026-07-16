'use client'

import { useState } from 'react'
import Link from 'next/link'

type TabType =
  | 'dashboard'
  | 'appointments'
  | 'records'
  | 'documents'
  | 'messages'
  | 'profile'
type TrendType = 'bp' | 'weight' | 'glucose'

interface MockTrendData {
  value: string
  unit: string
  points: { x: number; y: number }[]
  colorClass: string
  strokeColor: string
  fillGradient: string
}

export default function AegisCareHomepage() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [activeTrend, setActiveTrend] = useState<TrendType>('bp')
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState([
    {
      sender: 'doctor',
      text: 'Hi Taena, how is your blood pressure trending after the adjustment?',
      time: '10:14 AM',
    },
    {
      sender: 'patient',
      text: 'It has stabilized around 118 systolic! Feeling much better.',
      time: '10:20 AM',
    },
  ])

  // Mock telemetry trend configurations
  const mockVitals: Record<TrendType, MockTrendData> = {
    bp: {
      value: '118',
      unit: 'mmHg (Systolic)',
      points: [
        { x: 10, y: 28 },
        { x: 28, y: 15 },
        { x: 46, y: 32 },
        { x: 64, y: 20 },
        { x: 82, y: 42 },
        { x: 100, y: 26 },
      ],
      colorClass: 'text-indigo-600',
      strokeColor: '#6366f1',
      fillGradient: 'url(#bp-gradient)',
    },
    weight: {
      value: '178',
      unit: 'lbs',
      points: [
        { x: 10, y: 15 },
        { x: 28, y: 20 },
        { x: 46, y: 24 },
        { x: 64, y: 30 },
        { x: 82, y: 32 },
        { x: 100, y: 38 },
      ],
      colorClass: 'text-cyan-500',
      strokeColor: '#06b6d4',
      fillGradient: 'url(#weight-gradient)',
    },
    glucose: {
      value: '94',
      unit: 'mg/dL',
      points: [
        { x: 10, y: 36 },
        { x: 28, y: 28 },
        { x: 46, y: 20 },
        { x: 64, y: 25 },
        { x: 82, y: 15 },
        { x: 100, y: 22 },
      ],
      colorClass: 'text-emerald-500',
      strokeColor: '#10b981',
      fillGradient: 'url(#glucose-gradient)',
    },
  }

  const currentTrend = mockVitals[activeTrend]
  const linePath = currentTrend.points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ')
  const areaPath = `${linePath} L 100 45 L 10 45 Z`

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return
    setMessages((prev) => [
      ...prev,
      { sender: 'patient', text: messageInput, time: 'Just Now' },
    ])
    setMessageInput('')
  }

  // Sidebar navigation options
  const navItems: { id: TabType; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'appointments', label: 'Appointments', icon: '📅' },
    { id: 'records', label: 'Records', icon: '📑' },
    { id: 'documents', label: 'Documents', icon: '📂' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ]

  return (
    <div className='h-screen w-screen bg-slate-50 text-slate-800 flex flex-col justify-between overflow-hidden relative selection:bg-indigo-100 selection:text-indigo-900'>
      {/* SAFE BACKGROUND BLURS */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
        <div className='absolute top-[-10%] left-[-10%] h-[500px] w-[500px] bg-indigo-200/20 blur-[130px] rounded-full' />
        <div className='absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] bg-cyan-200/25 blur-[150px] rounded-full' />
      </div>

      {/* HEADER / NAVIGATION BAR */}
      <header className='w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between z-20 relative shrink-0'>
        <div className='flex items-center gap-3 text-lg font-black tracking-tight text-slate-900'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-400 via-indigo-500 to-indigo-600 p-[1px] shadow-sm'>
            <span className='flex h-full w-full items-center justify-center rounded-[7px] bg-white text-xs font-black text-indigo-600'>
              Æ
            </span>
          </div>
          AegisCare
        </div>

        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='/explore-platform'
            className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'
          >
            Explore Platform
          </Link>
          <Link
            href='/learn-more'
            className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'
          >
            Learn More
          </Link>
          <Link
            href='/security-whitepaper'
            className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'
          >
            Security Whitepaper
          </Link>
        </nav>

        <Link
          href='/login'
          className='rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2 text-xs font-black text-slate-700 shadow-sm transition-all'
        >
          Portal Login
        </Link>
      </header>

      {/* MAIN HERO CONTAINER */}
      <main className='w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col lg:flex-row items-center gap-8 lg:gap-12 z-10 relative overflow-hidden'>
        {/* LEFT PANEL: Marketing Copy */}
        <div className='flex flex-col justify-center lg:w-[45%] shrink-0 space-y-5 max-w-xl py-4'>
          <div className='inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 self-start'>
            <span className='w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse' />
            <span className='text-[9px] font-black text-indigo-700 tracking-widest uppercase font-mono'>
              Platform Active
            </span>
          </div>

          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight'>
            The safe, unified ecosystem for <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500'>
              digital medicine.
            </span>
          </h1>

          <p className='text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md'>
            Unifying high-precision patient telemetry, real-time encrypted
            messaging, and compliant multi-portal workflows into a beautifully
            simple interface.
          </p>

          <div className='pt-2 space-y-3 max-w-md'>
            <Link
              href='/login'
              className='flex items-center justify-between w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3.5 text-xs font-black transition-all shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 group'
            >
              <span className='flex items-center gap-2.5'>
                <svg
                  className='w-4 h-4 text-indigo-200'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
                Sign In to Portal
              </span>
              <span className='transform translate-x-0 group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </Link>

            <div className='grid grid-cols-2 gap-3'>
              <Link
                href='/explore-platform'
                className='flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 py-3 text-xs font-bold text-slate-700 transition-all shadow-sm'
              >
                🔬 Live Demo
              </Link>
              <Link
                href='/request-access'
                className='flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 py-3 text-xs font-bold text-slate-700 transition-all shadow-sm'
              >
                📥 Request Access
              </Link>
            </div>
          </div>

          {/* COMPLIANCE BADGES */}
          <div className='border-t border-slate-200/60 pt-5 mt-2 flex items-center gap-6'>
            <div className='flex items-center gap-2.5'>
              <div className='p-2 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600'>
                <svg
                  className='w-4 h-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
              </div>
              <div>
                <h4 className='text-[10px] font-black uppercase tracking-wider text-slate-800 font-mono'>
                  SOC2 Type II
                </h4>
                <p className='text-[9px] text-slate-400'>
                  Continuous auditing.
                </p>
              </div>
            </div>

            <div className='flex items-center gap-2.5'>
              <div className='p-2 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600'>
                <svg
                  className='w-4 h-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
                  />
                </svg>
              </div>
              <div>
                <h4 className='text-[10px] font-black uppercase tracking-wider text-slate-800 font-mono'>
                  HIPAA Encrypted
                </h4>
                <p className='text-[9px] text-slate-400'>
                  Telemetry compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Floating 3D Interactive Browser Mockup */}
        <div className='flex-grow flex items-center justify-center relative w-full lg:w-[55%] py-4 overflow-hidden'>
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none' />

          {/* Isometric Transform Wrapper */}
          <div className='relative w-full max-w-lg shadow-2xl transition-all duration-700 hover:scale-[1.02]'>
            <div className='bg-white border border-slate-200/90 rounded-3xl overflow-hidden [transform:perspective(1000px)_rotateY(-6deg)_rotateX(3deg)] hover:[transform:none] transition-all duration-700 backdrop-blur-sm'>
            {/* Browser Window Chrome */}
            <div className='bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center justify-between'>
              <div className='flex items-center gap-1.5'>
                <span className='w-1.5 h-1.5 rounded-full bg-slate-200' />
                <span className='w-1.5 h-1.5 rounded-full bg-slate-200' />
                <span className='w-1.5 h-1.5 rounded-full bg-slate-200' />
              </div>
              <span className='text-[7px] sm:text-[8px] font-mono text-slate-400 select-none'>
                https://portal.aegiscare.io/patient-portal
              </span>
              <div className='w-8 h-1 bg-slate-200 rounded-full' />
            </div>

            {/* MOCKUP PATIENT PORTAL */}
            <div className='flex min-h-[300px] sm:min-h-[320px] bg-white'>
              {/* SIDEBAR */}
              <aside className='w-28 sm:w-32 bg-white border-r border-slate-100 p-2 sm:p-3 flex flex-col justify-between shrink-0'>
                <div className='space-y-4'>
                  <div className='flex items-center gap-1.5 text-[10px] font-black tracking-tight text-slate-900'>
                    <div className='flex h-5 w-5 items-center justify-center rounded-md bg-indigo-50 border border-indigo-100/50 text-[9px] font-black text-indigo-600 shrink-0'>
                      Æ
                    </div>
                    AegisCare
                  </div>

                  {/* Sidebar Nav Links */}
                  <nav className='space-y-0.5'>
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full text-left px-2 py-1 text-[8px] font-bold rounded-md transition-all flex items-center gap-1.5 border ${
                          activeTab === item.id
                            ? 'bg-indigo-50/50 text-indigo-600 border-indigo-100/30'
                            : 'text-slate-400 hover:text-slate-600 border-transparent hover:bg-slate-50/50'
                        }`}
                      >
                        <span className='text-[9px]'>{item.icon}</span>{' '}
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Patient Profile Footer Info with NEW Avatar Image */}
                <div className='space-y-2 pt-2 border-t border-slate-100'>
                  <div className='flex items-center gap-1.5'>
                    <div className='w-6 h-6 rounded-full overflow-hidden border border-slate-200 shrink-0 shadow-xs'>
                      <img
                        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
                        alt='Taena Mu Profile Avatar'
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='min-w-0'>
                      <h4 className='text-[8px] font-black text-slate-900 truncate leading-tight'>
                        Taena Mu
                      </h4>
                      <p className='text-[6px] text-slate-400 font-mono tracking-wide'>
                        DOB: 10/14/1990
                      </p>
            </div>
          </div>
                  <div className='flex items-center justify-center gap-1 w-full rounded-lg border border-slate-200 bg-white py-1 text-[7px] font-black text-slate-700 select-none cursor-not-allowed'>
                    🔑 Log Out
                  </div>
                </div>
              </aside>

              {/* DYNAMIC WORKSPACE ROUTING */}
              <div className='flex-grow p-3 sm:p-4 bg-[#f8fafc] flex flex-col justify-between space-y-3 min-w-0'>
                {/* Secure Hub Header */}
                <div className='flex items-center justify-between border-b border-slate-200/60 pb-2 shrink-0'>
                  <div className='space-y-0.5'>
                    <h2 className='text-[11px] sm:text-[12px] font-black text-slate-900 tracking-tight leading-tight capitalize'>
                      {activeTab === 'dashboard'
                        ? 'Welcome back, Taena Mu'
                        : `${activeTab} Hub`}
                    </h2>
                    <p className='text-[7px] text-slate-400 leading-none'>
                      {activeTab === 'dashboard'
                        ? 'Your clinical vitals and treatment plan are fully updated.'
                        : `Secure access to your personal HIPAA ${activeTab} file.`}
                    </p>
                  </div>
                  <div className='flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full shrink-0'>
                    <span className='w-1 h-1 rounded-full bg-emerald-500 animate-pulse' />
                    <span className='text-[5px] font-black uppercase text-emerald-800 font-mono tracking-wider'>
                      HIPAA SECURED
                    </span>
                  </div>
                </div>

                {/* Sub-workspace Render Switcher */}
                <div className='flex-grow flex items-stretch min-h-0'>
                  {/* TAB 1: DASHBOARD */}
                  {activeTab === 'dashboard' && (
                    <div className='grid grid-cols-12 gap-2.5 w-full items-stretch'>
                      {/* Vitals Trends Card */}
                      <div className='col-span-7 bg-white rounded-xl border border-slate-200/80 p-2.5 flex flex-col justify-between'>
                        <div className='flex items-start justify-between gap-1.5 shrink-0'>
                          <div>
                            <h3 className='text-[6px] font-black text-slate-900 uppercase tracking-wider font-mono'>
                              PERSONAL HEALTH TRENDS
                            </h3>
                            <p className='text-[5px] text-slate-400 leading-none mt-0.5'>
                              Visualize your vital telemetry over 6 months.
                            </p>
                          </div>
                          {/* Active Trend Selector */}
                          <div className='flex p-0.5 bg-slate-100 rounded-md scale-[0.9] origin-top-right shrink-0'>
                            {['bp', 'weight', 'glucose'].map((t) => (
                              <button
                                key={t}
                                onClick={() => setActiveTrend(t as TrendType)}
                                className={`px-1.5 py-0.5 text-[5px] font-bold rounded-sm transition-all capitalize ${
                                  activeTrend === t
                                    ? 'bg-white text-indigo-600 shadow-sm'
                                    : 'text-slate-400'
                                }`}
                              >
                                {t === 'glucose'
                                  ? 'Gl'
                                  : t === 'weight'
                                    ? 'Wt'
                                    : 'BP'}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Chart Render */}
                        <div className='relative pt-2 flex-grow flex flex-col justify-end'>
                          <div className='absolute top-[-2px] right-0 text-right'>
                            <span className='text-[13px] font-black text-slate-900 block leading-none'>
                              {currentTrend.value}
                            </span>
                            <span className='text-[5px] font-mono text-slate-400 block leading-none mt-0.5'>
                              {currentTrend.unit} (Latest)
                            </span>
                          </div>

                          <svg
                            viewBox='0 0 110 48'
                            className='w-full overflow-visible mt-2'
                          >
                            <line
                              x1='10'
                              y1='10'
                              x2='100'
                              y2='10'
                              stroke='#f1f5f9'
                              strokeWidth='0.5'
                            />
                            <line
                              x1='10'
                              y1='25'
                              x2='100'
                              y2='25'
                              stroke='#f1f5f9'
                              strokeWidth='0.5'
                            />
                            <line
                              x1='10'
                              y1='40'
                              x2='100'
                              y2='40'
                              stroke='#e2e8f0'
                              strokeWidth='0.75'
                            />

                            <path
                              d={areaPath}
                              fill={currentTrend.fillGradient}
                              className='transition-all duration-300'
                            />
                            <path
                              d={linePath}
                              fill='none'
                              stroke={currentTrend.strokeColor}
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              className='transition-all duration-300'
                            />

                            {currentTrend.points.map((p, i) => (
                              <circle
                                key={i}
                                cx={p.x}
                                cy={p.y}
                                r='2'
                                className='fill-white stroke-slate-900 transition-all duration-300'
                                strokeWidth='1.2'
                              />
                            ))}

                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(
                              (m, idx) => (
                                <text
                                  key={idx}
                                  x={10 + idx * 18}
                                  y='47'
                                  textAnchor='middle'
                                  className='text-[4.5px] font-bold fill-slate-400 font-mono'
                                >
                                  {m}
                                </text>
                              )
                            )}

                            <defs>
                              <linearGradient
                                id='bp-gradient'
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='1'
                              >
                                <stop
                                  offset='0%'
                                  stopColor='#6366f1'
                                  stopOpacity='0.15'
                                />
                                <stop
                                  offset='100%'
                                  stopColor='white'
                                  stopOpacity='0'
                                />
                              </linearGradient>
                              <linearGradient
                                id='weight-gradient'
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='1'
                              >
                                <stop
                                  offset='0%'
                                  stopColor='#06b6d4'
                                  stopOpacity='0.15'
                                />
                                <stop
                                  offset='100%'
                                  stopColor='white'
                                  stopOpacity='0'
                                />
                              </linearGradient>
                              <linearGradient
                                id='glucose-gradient'
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='1'
                              >
                                <stop
                                  offset='0%'
                                  stopColor='#10b981'
                                  stopOpacity='0.15'
                                />
                                <stop
                                  offset='100%'
                                  stopColor='white'
                                  stopOpacity='0'
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* Timeline Card */}
                      <div className='col-span-5 bg-white rounded-xl border border-slate-200/80 p-2.5 flex flex-col justify-between'>
                        <div>
                          <h3 className='text-[6px] font-black text-slate-900 uppercase tracking-wider font-mono'>
                            APPOINTMENT TIMELINE
                          </h3>
                        </div>
                        <div className='relative pl-3 space-y-2.5 before:absolute before:left-[5px] before:top-1 before:bottom-1 before:w-[0.75px] before:bg-slate-100 flex-grow mt-2'>
                          <div className='relative'>
                            <span className='absolute left-[-11px] top-0.5 flex h-2 w-2 items-center justify-center rounded-full bg-indigo-100 ring-2 ring-white'>
                              <span className='h-1 w-1 rounded-full bg-indigo-600' />
                            </span>
                            <div className='space-y-0.5'>
                              <span className='inline-block text-[4.5px] font-mono font-bold text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded-sm scale-[0.9] origin-left'>
                                UPCOMING
                              </span>
                              <h4 className='text-[7px] font-bold text-slate-900 leading-none'>
                                Consultation
                              </h4>
                              <p className='text-[5.5px] text-slate-400 leading-none'>
                                Dr. Jenkins • Jul 24, 2026
                              </p>
                            </div>
                          </div>

                          <div className='relative'>
                            <span className='absolute left-[-11px] top-0.5 flex h-2 w-2 items-center justify-center rounded-full bg-slate-200 ring-2 ring-white'>
                              <span className='h-1 w-1 rounded-full bg-slate-400' />
                            </span>
                            <div className='space-y-0.5'>
                              <span className='inline-block text-[4.5px] font-mono font-bold text-slate-500 bg-slate-100 px-1 py-0.5 rounded-sm scale-[0.9] origin-left'>
                                PAST
                              </span>
                              <h4 className='text-[7px] font-bold text-slate-700 leading-none'>
                                Annual Wellness
                              </h4>
                              <p className='text-[5.5px] text-slate-400 leading-none'>
                                Complete exam • May 12, 2026
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: APPOINTMENTS */}
                  {activeTab === 'appointments' && (
                    <div className='bg-white rounded-xl border border-slate-200/80 p-2.5 w-full flex flex-col justify-between space-y-2'>
                      <div className='flex justify-between items-center shrink-0'>
                        <span className='text-[6px] font-black text-slate-900 uppercase tracking-wider font-mono'>
                          Upcoming & Requests
                        </span>
                        <button className='text-[5.5px] bg-indigo-600 text-white font-bold px-1.5 py-0.5 rounded-md hover:bg-indigo-700 transition-all shadow-xs'>
                          + Book Appointment
                        </button>
                      </div>
                      <div className='flex-grow space-y-1.5 overflow-y-auto pr-0.5'>
                        <div className='p-1.5 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center'>
                          <div>
                            <h4 className='text-[7.5px] font-bold text-slate-900'>
                              Cardiology Follow-Up
                            </h4>
                            <p className='text-[6px] text-slate-400'>
                              With Dr. Jenkins • 10:00 AM PST
                            </p>
                          </div>
                          <span className='text-[5.5px] font-bold font-mono px-1 bg-indigo-100 text-indigo-700 rounded-sm'>
                            Jul 24, 2026
                          </span>
                        </div>
                        <div className='p-1.5 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center'>
                          <div>
                            <h4 className='text-[7.5px] font-bold text-slate-900'>
                              General Telehealth check
                            </h4>
                            <p className='text-[6px] text-slate-400'>
                              With Nurse Specialist Robin
                            </p>
                          </div>
                          <span className='text-[5.5px] font-bold font-mono px-1 bg-indigo-100 text-indigo-700 rounded-sm'>
                            Aug 05, 2026
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: MEDICAL RECORDS */}
                  {activeTab === 'records' && (
                    <div className='bg-white rounded-xl border border-slate-200/80 p-2.5 w-full flex flex-col justify-between space-y-2'>
                      <span className='text-[6px] font-black text-slate-900 uppercase tracking-wider font-mono shrink-0'>
                        Laboratory and Diagnostic Logs
                      </span>
                      <div className='flex-grow space-y-1 overflow-y-auto pr-0.5'>
                        {[
                          {
                            title: 'Lipid Wellness Screen',
                            date: 'May 12, 2026',
                            status: 'Approved',
                          },
                          {
                            title: 'Complete Blood Count (CBC)',
                            date: 'May 12, 2026',
                            status: 'Approved',
                          },
                          {
                            title: 'Metabolic Comprehensive Panel',
                            date: 'Jan 10, 2026',
                            status: 'Archived',
                          },
                        ].map((rec, i) => (
                          <div
                            key={i}
                            className='p-1.5 border-b border-slate-100 flex items-center justify-between text-[7px]'
                          >
                            <div className='flex items-center gap-2'>
                              <span className='text-[9px]'>🧬</span>
                              <div>
                                <span className='font-bold text-slate-800 block leading-tight'>
                                  {rec.title}
                                </span>
                                <span className='text-[5.5px] text-slate-400'>
                                  {rec.date}
                                </span>
                              </div>
                            </div>
                            <span
                              className={`text-[5px] font-bold font-mono px-1 rounded-sm ${rec.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}
                            >
                              {rec.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 4: DOCUMENTS */}
                  {activeTab === 'documents' && (
                    <div className='bg-white rounded-xl border border-slate-200/80 p-2.5 w-full flex flex-col justify-between space-y-2'>
                      <span className='text-[6px] font-black text-slate-900 uppercase tracking-wider font-mono shrink-0'>
                        HIPAA Compliance & Disclosures
                      </span>
                      <div className='flex-grow space-y-1.5 overflow-y-auto pr-0.5'>
                        {[
                          {
                            name: 'Patient_Consent_Form_v2.pdf',
                            size: '240 KB',
                          },
                          {
                            name: 'AegisCare_HIPAA_Notice.pdf',
                            size: '1.2 MB',
                          },
                          {
                            name: 'Physician_Referral_Jenkins.pdf',
                            size: '94 KB',
                          },
                        ].map((doc, i) => (
                          <div
                            key={i}
                            className='p-1.5 bg-slate-50 border border-slate-150 rounded-lg flex items-center justify-between'
                          >
                            <div className='flex items-center gap-2 min-w-0'>
                              <span className='text-[9px] text-red-500 shrink-0'>
                                📄
                              </span>
                              <span className='text-[7px] font-bold text-slate-800 truncate leading-none'>
                                {doc.name}
                              </span>
                            </div>
                            <span className='text-[5.5px] font-mono text-slate-400 shrink-0 hover:text-indigo-600 transition-colors cursor-pointer'>
                              📥 {doc.size}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 5: SECURE MESSAGES */}
                  {activeTab === 'messages' && (
                    <div className='bg-white rounded-xl border border-slate-200/80 p-2 w-full flex flex-col justify-between h-full min-h-0'>
                      {/* Active conversation details */}
                      <div className='flex items-center justify-between border-b border-slate-100 pb-1 shrink-0'>
                        <div className='flex items-center gap-1.5'>
                          <img
                            src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=60&q=80'
                            className='w-4.5 h-4.5 rounded-full object-cover border border-slate-200'
                          />
                          <div>
                            <h4 className='text-[7px] font-bold text-slate-900 leading-none'>
                              Dr. Jenkins
                            </h4>
                            <span className='text-[5px] text-emerald-500 font-bold block'>
                              Online
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Messages logs */}
                      <div className='flex-grow overflow-y-auto space-y-2 p-1 font-sans text-[7px] scrollbar-none'>
                        {messages.map((msg, i) => (
                          <div
                            key={i}
                            className={`flex flex-col ${msg.sender === 'patient' ? 'items-end' : 'items-start'}`}
                          >
                            <div
                              className={`p-1.5 rounded-lg max-w-[85%] leading-tight shadow-xs ${
                                msg.sender === 'patient'
                                  ? 'bg-indigo-600 text-white rounded-tr-none'
                                  : 'bg-slate-100 text-slate-800 rounded-tl-none'
                              }`}
                            >
                              {msg.text}
                            </div>
                            <span className='text-[5px] text-slate-400 font-mono mt-0.5'>
                              {msg.time}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Chat interactive input bar */}
                      <form
                        onSubmit={handleSendMessage}
                        className='flex items-center gap-1 border-t border-slate-150 pt-1.5 shrink-0'
                      >
                        <input
                          type='text'
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          placeholder='Ask clinical team...'
                          className='flex-grow text-[6.5px] bg-slate-50 border border-slate-200 rounded-md px-1.5 py-1 focus:outline-none focus:border-indigo-500'
                        />
                        <button
                          type='submit'
                          className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[6px] px-2 py-1 rounded-md shadow-xs'
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  )}

                  {/* TAB 6: PROFILE */}
                  {activeTab === 'profile' && (
                    <div className='bg-white rounded-xl border border-slate-200/80 p-2.5 w-full flex flex-col justify-between space-y-2.5'>
                      <span className='text-[6px] font-black text-slate-900 uppercase tracking-wider font-mono shrink-0'>
                        Demographics & Insurance
                      </span>
                      <div className='grid grid-cols-2 gap-2 text-[7px] flex-grow overflow-y-auto pr-0.5'>
                        <div>
                          <span className='text-[5px] font-mono text-slate-400 block uppercase'>
                            Legal Name
                          </span>
                          <span className='font-bold text-slate-800'>
                            Taena Jenkins Mu
                          </span>
                        </div>
                        <div>
                          <span className='text-[5px] font-mono text-slate-400 block uppercase'>
                            Insurance Provider
                          </span>
                          <span className='font-bold text-slate-800'>
                            Aetna PPO Premium
                          </span>
                        </div>
                        <div>
                          <span className='text-[5px] font-mono text-slate-400 block uppercase'>
                            Subscriber ID
                          </span>
                          <span className='font-bold text-slate-800 font-mono'>
                            #AET-49129-921
                          </span>
                        </div>
                        <div>
                          <span className='text-[5px] font-mono text-slate-400 block uppercase'>
                            Preferred Clinic
                          </span>
                          <span className='font-bold text-slate-800'>
                            Aegis Labs West
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className='w-full max-w-7xl mx-auto px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[9px] text-slate-400 font-mono tracking-wider gap-2 shrink-0'>
        <span>© {new Date().getFullYear()} AEGISCARE SYSTEMS CORP.</span>
        <div className='flex gap-4'>
          <Link
            href='/security-whitepaper'
            className='hover:text-slate-700 transition-colors'
          >
            SECURITY COMPLIANCE
          </Link>
          <span>•</span>
          <Link
            href='/learn-more'
            className='hover:text-slate-700 transition-colors'
          >
            LEGAL TERMS
          </Link>
        </div>
      </footer>
    </div>
  )
}
