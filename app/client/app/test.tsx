'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from './components/Footer'

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
  points: string // SVG Cubic Bezier Curve Path
  colorClass: string
  strokeColor: string
  fillGradient: string
  glowColor: string
}

export default function AegisCareHomepage() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [activeTrend, setActiveTrend] = useState<TrendType>('bp')
  const [messageInput, setMessageInput] = useState('')
  const [liveBpm, setLiveBpm] = useState(72)
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

  // Simulated live telemetry sensor pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveBpm((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1
        const next = prev + delta
        return next > 80 ? 76 : next < 65 ? 68 : next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Mock telemetry trend configurations (Optimized with premium smooth Bezier curves)
  const mockVitals: Record<TrendType, MockTrendData> = {
    bp: {
      value: '118',
      unit: 'mmHg (Systolic)',
      points: 'M 10 32 C 25 15, 40 38, 55 18 C 70 2, 85 40, 100 22',
      colorClass: 'text-indigo-600',
      strokeColor: '#6366f1',
      fillGradient: 'url(#bp-gradient)',
      glowColor: 'rgba(99, 102, 241, 0.4)',
    },
    weight: {
      value: '178',
      unit: 'lbs',
      points: 'M 10 38 C 25 35, 40 28, 55 24 C 70 20, 85 12, 100 10',
      colorClass: 'text-cyan-500',
      strokeColor: '#06b6d4',
      fillGradient: 'url(#weight-gradient)',
      glowColor: 'rgba(6, 182, 212, 0.4)',
    },
    glucose: {
      value: '94',
      unit: 'mg/dL',
      points: 'M 10 12 C 25 28, 40 10, 55 30 C 70 38, 85 14, 100 15',
      colorClass: 'text-emerald-500',
      strokeColor: '#10b981',
      fillGradient: 'url(#glucose-gradient)',
      glowColor: 'rgba(16, 185, 129, 0.4)',
    },
  }

  const currentTrend = mockVitals[activeTrend]
  // Append closing commands to convert bezier curve to closed area shape for filled gradients
  const areaPath = `${currentTrend.points} L 100 45 L 10 45 Z`

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return
    setMessages((prev) => [
      ...prev,
      { sender: 'patient', text: messageInput, time: 'Just Now' },
    ])
    setMessageInput('')
  }

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
            <span className='text-[12px] font-black text-indigo-700 tracking-widest uppercase font-mono'>
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
                <h4 className='text-[12px] font-black uppercase tracking-wider text-slate-800 font-mono'>
                  SOC2 Type II
                </h4>
                <p className='text-[12px] text-slate-400'>
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
                <h4 className='text-[12px] font-black uppercase tracking-wider text-slate-800 font-mono'>
                  HIPAA Encrypted
                </h4>
                <p className='text-[12px] text-slate-400'>
                  Telemetry compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Floating 3D Interactive Browser Mockup */}
        <div className='flex-grow flex items-center justify-center relative w-full lg:w-[55%] py-8 overflow-visible min-h-[460px] sm:min-h-[500px]'>
          {/* HIGH-INTENSITY LIGHT LEAKS FOR CONTRAST & POP */}
          <div className='absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none' />
          <div className='absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none' />

          {/* Grid Background behind browser */}
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40 pointer-events-none' />

          {/* Isometric Transform Wrapper */}
          <div className='relative w-full max-w-xl [transform:perspective(1200px)_rotateY(-10deg)_rotateX(5deg)] hover:[transform:perspective(1200px)_rotateY(-3deg)_rotateX(1deg)] transition-all duration-700 ease-out'>
            {/* LAYER 1: BACKWARDS-FLOATING COMPLIANCE SHIELD CARD */}
            <div className='absolute -top-10 -right-8 bg-slate-900 text-white rounded-2xl p-3 shadow-2xl border border-slate-800 flex items-center gap-3 z-0 [transform:translateZ(-30px)] scale-90 pointer-events-none hidden sm:flex'>
              <div className='h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400'>
                🛡️
              </div>
              <div>
                <span className='block text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none'>
                  AES-256 Key Status
                </span>
                <span className='text-[10px] font-bold text-emerald-400 flex items-center gap-1.5 mt-1'>
                  Active & Rotated{' '}
                  <span className='h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping' />
                </span>
              </div>
            </div>

            {/* LAYER 2: INTERACTIVE BROWSER WINDOW CONTAINER */}
            <div className='relative bg-white/95 backdrop-blur-md border border-slate-200 rounded-3xl shadow-[0_25px_60px_-15px_rgba(99,102,241,0.15),0_0_1px_1px_rgba(99,102,241,0.05)] overflow-hidden z-10'>
              {/* Browser Window Chrome */}
              <div className='bg-slate-50 border-b border-slate-200/80 px-4 py-3 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='w-2.5 h-2.5 rounded-full bg-red-400/80' />
                  <span className='w-2.5 h-2.5 rounded-full bg-yellow-400/80' />
                  <span className='w-2.5 h-2.5 rounded-full bg-green-400/80' />
                </div>
                <div className='flex items-center gap-2 bg-white border border-slate-200/60 rounded-lg px-4 py-1 text-[9px] font-mono text-slate-500 w-[55%] justify-center shadow-inner'>
                  <span className='text-emerald-500 font-bold'>🔒 Secure</span>
                  <span className='text-slate-300'>|</span>
                  <span className='truncate select-none'>
                    portal.aegiscare.io/patient
                  </span>
                </div>
                <div className='w-10 h-1.5 bg-slate-200 rounded-full' />
              </div>

              {/* MOCKUP PATIENT PORTAL CONTENT */}
              <div className='flex min-h-[340px] sm:min-h-[370px] bg-white'>
                {/* SIDEBAR */}
                <aside className='w-32 sm:w-36 bg-slate-50/50 border-r border-slate-200/80 p-3 flex flex-col justify-between shrink-0'>
                  <div className='space-y-5'>
                    <div className='flex items-center gap-2 text-[13px] font-black tracking-tight text-slate-900'>
                      <div className='flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 shadow-md shadow-indigo-200 text-[10px] font-black text-white shrink-0'>
                        Æ
                      </div>
                      AegisCare
                    </div>

                    {/* Sidebar Nav Links */}
                    <nav className='space-y-1'>
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full text-left px-2.5 py-1.5 text-[9px] font-extrabold rounded-lg transition-all flex items-center gap-2 border ${
                            activeTab === item.id
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/10'
                              : 'text-slate-500 hover:text-slate-900 border-transparent hover:bg-slate-200/40'
                          }`}
                        >
                          <span className='text-[12px]'>{item.icon}</span>{' '}
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Patient Profile Footer Info */}
                  <div className='space-y-3 pt-3 border-t border-slate-200/80'>
                    <div className='flex items-center gap-2'>
                      <div className='w-7 h-7 rounded-full overflow-hidden border-2 border-white ring-2 ring-indigo-500/20 shrink-0 shadow-sm'>
                        <img
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
                          alt='Taena Mu Profile Avatar'
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='min-w-0'>
                        <h4 className='text-[9px] font-black text-slate-900 truncate leading-tight'>
                          Taena Mu
                        </h4>
                        <p className='text-[7px] text-slate-400 font-mono tracking-wide'>
                          DOB: 10/14/1990
                        </p>
                      </div>
                    </div>
                    <button className='flex items-center justify-center gap-1.5 w-full rounded-lg border border-slate-200 bg-white hover:bg-slate-50 py-1.5 text-[8px] font-black text-slate-700 shadow-xs active:scale-[0.98] transition-transform'>
                      🔑 Log Out
                    </button>
                  </div>
                </aside>

                {/* DYNAMIC WORKSPACE ROUTING */}
                <div className='flex-grow p-4 bg-slate-50/30 flex flex-col justify-between space-y-4 min-w-0'>
                  {/* Secure Hub Header */}
                  <div className='flex items-center justify-between border-b border-slate-200/60 pb-3 shrink-0'>
                    <div className='space-y-1'>
                      <h2 className='text-[13px] sm:text-[14px] font-black text-slate-900 tracking-tight leading-tight capitalize'>
                        {activeTab === 'dashboard'
                          ? 'Welcome back, Taena'
                          : `${activeTab} Hub`}
                      </h2>
                      <p className='text-[8px] text-slate-400 leading-none'>
                        {activeTab === 'dashboard'
                          ? 'Your telemetry trends are fully secured and updated.'
                          : `Private HIPAA ${activeTab} records.`}
                      </p>
                    </div>
                    <div className='flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full shrink-0 shadow-xs'>
                      <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />
                      <span className='text-[6px] font-black uppercase text-emerald-800 font-mono tracking-wider'>
                        HIPAA SECURED
                      </span>
                    </div>
                  </div>

                  {/* Sub-workspace Render Switcher */}
                  <div className='flex-grow flex items-stretch min-h-0'>
                    {/* TAB 1: DASHBOARD */}
                    {activeTab === 'dashboard' && (
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
                            {/* Active Trend Selector */}
                            <div className='flex p-0.5 bg-slate-100/80 border border-slate-200/40 rounded-lg shrink-0'>
                              {['bp', 'weight', 'glucose'].map((t) => (
                                <button
                                  key={t}
                                  onClick={() => setActiveTrend(t as TrendType)}
                                  className={`px-2 py-0.5 text-[6px] font-black rounded-md transition-all capitalize ${
                                    activeTrend === t
                                      ? 'bg-white text-indigo-600 shadow-sm'
                                      : 'text-slate-400 hover:text-slate-600'
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

                          {/* Premium Vector Chart Render */}
                          <div className='relative pt-4 flex-grow flex flex-col justify-end'>
                            <div className='absolute top-0 right-0 text-right'>
                              <span
                                className={`text-[16px] font-black ${currentTrend.colorClass} block leading-none`}
                              >
                                {currentTrend.value}
                              </span>
                              <span className='text-[6px] font-bold font-mono text-slate-400 block leading-none mt-0.5'>
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
                                className='transition-all duration-500 ease-in-out'
                              />
                              <path
                                d={currentTrend.points}
                                fill='none'
                                stroke={currentTrend.strokeColor}
                                strokeWidth='1.75'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='transition-all duration-500 ease-in-out'
                                style={{
                                  filter: `drop-shadow(0px 3px 6px ${currentTrend.glowColor})`,
                                }}
                              />

                              {/* Highlight current pulsing metrics dot */}
                              <circle
                                cx='100'
                                cy='22'
                                r='2.5'
                                className='fill-indigo-600 stroke-white'
                                strokeWidth='1.2'
                              />
                              <circle
                                cx='100'
                                cy='22'
                                r='4'
                                className='stroke-indigo-600 fill-none animate-pulse'
                                strokeWidth='0.5'
                              />

                              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(
                                (m, idx) => (
                                  <text
                                    key={idx}
                                    x={10 + idx * 18}
                                    y='47'
                                    textAnchor='middle'
                                    className='text-[5px] font-bold fill-slate-400 font-mono'
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
                                    stopOpacity='0.2'
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
                                    stopOpacity='0.2'
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
                                    stopOpacity='0.2'
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
                                <h4 className='text-[8px] font-extrabold text-slate-900 leading-none'>
                                  Consultation
                                </h4>
                                <p className='text-[6.5px] text-slate-400 leading-none'>
                                  Dr. Jenkins • Jul 24, 2026
                                </p>
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
                                <h4 className='text-[8px] font-extrabold text-slate-700 leading-none'>
                                  Annual Wellness
                                </h4>
                                <p className='text-[6.5px] text-slate-400 leading-none'>
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
                      <div className='bg-white rounded-xl border border-slate-200/90 p-3 w-full flex flex-col justify-between space-y-2.5 shadow-xs'>
                        <div className='flex justify-between items-center shrink-0'>
                          <span className='text-[7px] font-black text-slate-900 uppercase tracking-wider font-mono'>
                            Clinical Appts
                          </span>
                          <button className='text-[6.5px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-2 py-0.5 rounded-md transition-all shadow-xs'>
                            + Schedule Appt
                          </button>
                        </div>
                        <div className='flex-grow space-y-2 overflow-y-auto pr-0.5'>
                          <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center hover:bg-slate-100/50 transition-colors'>
                            <div>
                              <h4 className='text-[8.5px] font-black text-slate-900'>
                                Cardiology Follow-Up
                              </h4>
                              <p className='text-[7px] text-slate-500'>
                                With Dr. Jenkins • 10:00 AM PST
                              </p>
                            </div>
                            <span className='text-[6.5px] font-black font-mono px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md'>
                              Jul 24, 2026
                            </span>
                          </div>
                          <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center hover:bg-slate-100/50 transition-colors'>
                            <div>
                              <h4 className='text-[8.5px] font-black text-slate-900'>
                                General Telehealth
                              </h4>
                              <p className='text-[7px] text-slate-500'>
                                With Specialist Robin
                              </p>
                            </div>
                            <span className='text-[6.5px] font-black font-mono px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md'>
                              Aug 05, 2026
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB 3: MEDICAL RECORDS */}
                    {activeTab === 'records' && (
                      <div className='bg-white rounded-xl border border-slate-200/90 p-3 w-full flex flex-col justify-between space-y-2.5 shadow-xs'>
                        <span className='text-[7px] font-black text-slate-900 uppercase tracking-wider font-mono shrink-0'>
                          Laboratory Records
                        </span>
                        <div className='flex-grow space-y-1.5 overflow-y-auto pr-0.5'>
                          {[
                            {
                              title: 'Lipid Wellness Screen',
                              date: 'May 12, 2026',
                              status: 'Approved',
                            },
                            {
                              title: 'Metabolic Comprehensive Panel',
                              date: 'Jan 18, 2026',
                              status: 'Approved',
                            },
                            {
                              title: 'ECG Electrocardiogram',
                              date: 'Nov 02, 2025',
                              status: 'Archived',
                            },
                          ].map((rec, i) => (
                            <div
                              key={i}
                              className='p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center hover:bg-slate-100/50 transition-colors'
                            >
                              <div>
                                <h4 className='text-[8.5px] font-black text-slate-900'>
                                  {rec.title}
                                </h4>
                                <p className='text-[7px] text-slate-500'>
                                  {rec.date}
                                </p>
                              </div>
                              <span
                                className={`text-[6px] font-black px-1.5 py-0.5 rounded-md ${rec.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-slate-100 text-slate-600'}`}
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
                      <div className='bg-white rounded-xl border border-slate-200/90 p-3 w-full flex flex-col justify-between space-y-2.5 shadow-xs'>
                        <span className='text-[7px] font-black text-slate-900 uppercase tracking-wider font-mono shrink-0'>
                          Clinical Documentation
                        </span>
                        <div className='flex-grow space-y-1.5 overflow-y-auto pr-0.5'>
                          {[
                            {
                              name: 'HIPAA_Consent_Form.pdf',
                              size: '1.2 MB',
                              date: 'Oct 14, 2025',
                            },
                            {
                              name: 'Dr_Jenkins_Referral_Doc.pdf',
                              size: '420 KB',
                              date: 'Jul 01, 2026',
                            },
                            {
                              name: 'Medication_List_Updated.pdf',
                              size: '180 KB',
                              date: 'Jul 15, 2026',
                            },
                          ].map((doc, i) => (
                            <div
                              key={i}
                              className='p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center hover:bg-slate-100/50 transition-all cursor-pointer'
                            >
                              <div className='flex items-center gap-2'>
                                <span className='text-[12px]'>📄</span>
                                <div>
                                  <h4 className='text-[8px] font-bold text-slate-900 truncate max-w-[140px]'>
                                    {doc.name}
                                  </h4>
                                  <p className='text-[6.5px] text-slate-400'>
                                    {doc.size} • {doc.date}
                                  </p>
                                </div>
                              </div>
                              <span className='text-[7px] text-indigo-600 font-extrabold hover:underline'>
                                Download
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* TAB 5: MESSAGES */}
                    {activeTab === 'messages' && (
                      <div className='bg-white rounded-xl border border-slate-200/90 p-2.5 flex flex-col justify-between w-full min-h-0 overflow-hidden shadow-xs'>
                        {/* Messages Thread Container */}
                        <div className='flex-grow overflow-y-auto space-y-2 pr-1 pb-1.5 flex flex-col justify-end'>
                          {messages.map((msg, i) => (
                            <div
                              key={i}
                              className={`flex flex-col max-w-[85%] ${
                                msg.sender === 'patient'
                                  ? 'self-end items-end'
                                  : 'self-start items-start'
                              }`}
                            >
                              <div
                                className={`px-3 py-2 rounded-2xl text-[8.5px] leading-relaxed font-semibold shadow-xs ${
                                  msg.sender === 'patient'
                                    ? 'bg-indigo-600 text-white rounded-br-none'
                                    : 'bg-slate-100 text-slate-800 rounded-bl-none'
                                }`}
                              >
                                {msg.text}
                              </div>
                              <span className='text-[6px] text-slate-400 mt-1 px-1 font-mono'>
                                {msg.time}
                              </span>
                            </div>
                          ))}

                          {/* Simulated Live Doctor Typing Indicator */}
                          <div className='self-start items-start flex gap-1.5 items-center bg-slate-100/60 rounded-full px-2.5 py-1 text-[7.5px] text-slate-400 font-bold'>
                            <span className='flex gap-0.5'>
                              <span
                                className='w-1 h-1 bg-slate-400 rounded-full animate-bounce'
                                style={{ animationDelay: '0ms' }}
                              />
                              <span
                                className='w-1 h-1 bg-slate-400 rounded-full animate-bounce'
                                style={{ animationDelay: '150ms' }}
                              />
                              <span
                                className='w-1 h-1 bg-slate-400 rounded-full animate-bounce'
                                style={{ animationDelay: '300ms' }}
                              />
                            </span>
                            Dr. Jenkins typing...
                          </div>
                        </div>

                        {/* Interactive Message Input Box */}
                        <form
                          onSubmit={handleSendMessage}
                          className='border-t border-slate-200/60 pt-2.5 flex items-center gap-2 shrink-0'
                        >
                          <input
                            type='text'
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder='Type secure response...'
                            className='flex-grow bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 text-[8.5px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20'
                          />
                          <button
                            type='submit'
                            className='bg-indigo-600 hover:bg-indigo-700 text-white h-6 px-2.5 rounded-lg flex items-center justify-center text-[9px] font-black transition-all'
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    )}

                    {/* TAB 6: USER PROFILE */}
                    {activeTab === 'profile' && (
                      <div className='bg-white rounded-xl border border-slate-200/90 p-3.5 w-full flex flex-col justify-between space-y-3 shadow-xs'>
                        <div className='flex items-center gap-3.5 border-b border-slate-200/60 pb-3 shrink-0'>
                          <div className='w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500/10 shrink-0 shadow-xs'>
                            <img
                              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
                              alt='Taena Mu Profile Avatar'
                              className='w-full h-full object-cover'
                            />
                          </div>
                          <div>
                            <h3 className='text-[11px] font-black text-slate-900'>
                              Taena Mu
                            </h3>
                            <p className='text-[7px] text-slate-400 font-mono'>
                              Registered Clinical Patient
                            </p>
                          </div>
                        </div>

                        <div className='flex-grow grid grid-cols-2 gap-2 text-[7.5px] overflow-y-auto pr-0.5'>
                          <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg'>
                            <span className='text-[6px] text-slate-400 block font-mono'>
                              EMAIL ADDRESS
                            </span>
                            <span className='font-bold text-slate-800 break-all'>
                              taena.mu@aegiscare.io
                            </span>
                          </div>
                          <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg'>
                            <span className='text-[6px] text-slate-400 block font-mono'>
                              PRIMARY PHONE
                            </span>
                            <span className='font-bold text-slate-800'>
                              +1 (555) 234-5678
                            </span>
                          </div>
                          <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg'>
                            <span className='text-[6px] text-slate-400 block font-mono'>
                              INSURANCE ID
                            </span>
                            <span className='font-bold text-slate-800 font-mono'>
                              #AEG-7822-MD
                            </span>
                          </div>
                          <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg'>
                            <span className='text-[6px] text-slate-400 block font-mono'>
                              PRIMARY PROVIDER
                            </span>
                            <span className='font-bold text-slate-800'>
                              Dr. Allison Jenkins
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* LAYER 3: FORWARD-FLOATING TELEMETRY SENSOR CARD */}
            <div className='absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/80 flex items-center gap-3 z-20 [transform:translateZ(40px)] scale-95 pointer-events-none hidden sm:flex'>
              <div className='h-9 w-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 relative shrink-0'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-xl bg-red-400 opacity-20' />
                ❤️
              </div>
              <div>
                <span className='block text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none'>
                  Wearable Pulse
                </span>
                <span className='text-[14px] font-black text-slate-900 flex items-baseline gap-1 mt-1'>
                  {liveBpm}{' '}
                  <span className='text-[8px] text-slate-400 font-medium'>
                    bpm
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
