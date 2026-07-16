'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '../../components/Footer'

export default function LiveDemo() {
  // Simulated State Engine
  const [systolic, setSystolic] = useState(118)
  const [bpm, setBpm] = useState(72)
  const [o2, setO2] = useState(98)
  const [streamActive, setStreamActive] = useState(true)
  const [systemLogs, setSystemLogs] = useState([
    '// Ingesting telemetry feed via virtualized mock channel...',
    '// Session established with verified JSON Web Token (JWT)',
    '// Compliance Check: Local cache matching encrypted sandbox scope',
  ])

  // Periodic Telemetry Simulation
  useEffect(() => {
    if (!streamActive) return

    const interval = setInterval(() => {
      // Small natural fluctuations
      setSystolic((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2
        const next = prev + delta
        return next > 135 ? 135 : next < 110 ? 110 : next
      })

      setBpm((prev) => {
        const delta = Math.floor(Math.random() * 7) - 3
        const next = prev + delta
        return next > 110 ? 110 : next < 60 ? 60 : next
      })

      setO2((prev) => {
        const rolls = Math.random()
        if (rolls > 0.85) {
          const next = prev === 100 ? 99 : prev + 1
          return next
        } else if (rolls < 0.15) {
          const next = prev === 95 ? 96 : prev - 1
          return next
        }
        return prev
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [streamActive])

  // Custom log injector
  const addLog = (message) => {
    setSystemLogs((prev) => [
      `[${new Date().toLocaleTimeString()}] ${message}`,
      ...prev.slice(0, 4),
    ])
  }

  // Handle stream toggle
  const toggleStreaming = () => {
    if (streamActive) {
      setStreamActive(false)
      addLog('WARN: Virtual websocket connection terminated by user.')
    } else {
      setStreamActive(true)
      addLog('SUCCESS: Socket handshake complete. Telemetry pipeline active.')
    }
  }

  return (
    <div className='min-h-screen w-screen bg-slate-50 text-slate-800 flex flex-col justify-between overflow-x-hidden relative selection:bg-indigo-100 selection:text-indigo-900'>
      {/* SAFE BACKGROUND BLURS */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
        <div className='absolute top-[-10%] left-[-10%] h-[500px] w-[500px] bg-indigo-200/20 blur-[130px] rounded-full' />
        <div className='absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] bg-cyan-200/25 blur-[150px] rounded-full' />
      </div>

      {/* HEADER / NAVIGATION BAR */}
      <header className='w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between z-20 relative shrink-0'>
        <Link
          href='/'
          className='flex items-center gap-3 text-lg font-black tracking-tight text-slate-900'
        >
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-400 via-indigo-500 to-indigo-600 p-[1px] shadow-sm'>
            <span className='flex h-full w-full items-center justify-center rounded-[7px] bg-white text-xs font-black text-indigo-600'>
              Æ
            </span>
          </div>
          AegisCare
        </Link>

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

      {/* MAIN CONTAINER */}
      <main className='w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col gap-8 z-10 relative py-6'>
        {/* Intro Section */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/50 pb-5'>
          <div>
            <div className='inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-2'>
              <span className='w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse' />
              <span className='text-[9px] font-black text-indigo-700 tracking-widest uppercase font-mono'>
                Interactive Sandbox Portal
              </span>
            </div>
            <h1 className='text-2xl sm:text-3xl font-black tracking-tight text-slate-900'>
              Live Patient Telemetry Console
            </h1>
            <p className='text-xs text-slate-500 font-medium mt-0.5'>
              Interact with the controls below to simulate clinical data
              ingestion, pipeline reactions, and state logging.
            </p>
          </div>

          <button
            onClick={toggleStreaming}
            className={`rounded-2xl px-5 py-3 text-xs font-black text-white transition-all shadow-md ${
              streamActive
                ? 'bg-rose-500 hover:bg-rose-600'
                : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {streamActive
              ? '⏸ Pause Telemetry Feed'
              : '▶ Resume Telemetry Feed'}
          </button>
        </div>

        {/* Dashboard Panels */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-grow'>
          {/* Interactive Controls & Adjustments (Left) */}
          <div className='lg:col-span-4 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6'>
            <div className='space-y-5'>
              <h3 className='text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono'>
                🎛️ Sandbox Event Injectors
              </h3>

              {/* Slider 1: Systolic Pressure */}
              <div className='space-y-2'>
                <div className='flex justify-between text-[11px] font-bold text-slate-700'>
                  <span>Blood Pressure (Systolic)</span>
                  <span className='font-mono font-black text-indigo-600'>
                    {systolic} mmHg
                  </span>
                </div>
                <input
                  type='range'
                  min='90'
                  max='160'
                  value={systolic}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    setSystolic(val)
                    if (val >= 130) {
                      addLog(
                        `WARN: Systolic hypertension spike detected (${val} mmHg). Alert triggered.`
                      )
                    }
                  }}
                  className='w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600'
                />
              </div>

              {/* Slider 2: Pulse (BPM) */}
              <div className='space-y-2'>
                <div className='flex justify-between text-[11px] font-bold text-slate-700'>
                  <span>Heart Rate</span>
                  <span className='font-mono font-black text-rose-500'>
                    {bpm} BPM
                  </span>
                </div>
                <input
                  type='range'
                  min='40'
                  max='140'
                  value={bpm}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    setBpm(val)
                    if (val >= 100) {
                      addLog(
                        `WARN: Tachycardia threshold exceeded (${val} BPM).`
                      )
                    } else if (val <= 50) {
                      addLog(
                        `WARN: Bradycardia threshold detected (${val} BPM).`
                      )
                    }
                  }}
                  className='w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-rose-500'
                />
              </div>

              {/* Slider 3: Oxygen Levels */}
              <div className='space-y-2'>
                <div className='flex justify-between text-[11px] font-bold text-slate-700'>
                  <span>Oxygen Saturation (SpO2)</span>
                  <span className='font-mono font-black text-cyan-500'>
                    {o2}%
                  </span>
                </div>
                <input
                  type='range'
                  min='85'
                  max='100'
                  value={o2}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    setO2(val)
                    if (val < 94) {
                      addLog(
                        `ALERT: SpO2 hypoxia condition met (${val}%). Dispatching cloud event rules.`
                      )
                    }
                  }}
                  className='w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-500'
                />
              </div>
            </div>

            {/* Quick State Check */}
            <div className='bg-slate-50 border border-slate-100 rounded-2xl p-4.5 space-y-2.5 text-[10px] font-mono text-slate-500 leading-normal'>
              <div className='font-bold uppercase tracking-wider text-slate-400 text-[8.5px]'>
                Client Web Session Parameters
              </div>
              <div className='flex justify-between'>
                <span>MFA Token:</span>
                <span className='text-emerald-600 font-bold'>
                  ACTIVE / COOKIE
                </span>
              </div>
              <div className='flex justify-between'>
                <span>IAM Scope:</span>
                <span className='text-indigo-600 font-bold'>
                  write:telemetry
                </span>
              </div>
              <div className='flex justify-between'>
                <span>TLS Protocol:</span>
                <span className='text-slate-800 font-bold'>TLS v1.3</span>
              </div>
            </div>
          </div>

          {/* Interactive Screen Display (Right) */}
          <div className='lg:col-span-8 flex flex-col justify-between gap-6'>
            {/* Visualizer Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {/* BP Card */}
              <div className='bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm flex items-center justify-between'>
                <div>
                  <div className='text-[8px] font-black uppercase tracking-wider text-slate-400 font-mono'>
                    BP INGESTION
                  </div>
                  <div className='text-xl font-black text-slate-900 mt-1 font-mono'>
                    {systolic}/80
                  </div>
                  <span className='text-[8px] text-slate-400 font-mono'>
                    mmHg
                  </span>
                </div>
                <div className='text-2xl'>🩸</div>
              </div>

              {/* Heart Rate Card */}
              <div className='bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm flex items-center justify-between'>
                <div>
                  <div className='text-[8px] font-black uppercase tracking-wider text-slate-400 font-mono'>
                    HEART RATE
                  </div>
                  <div
                    className={`text-xl font-black mt-1 font-mono ${bpm >= 100 || bpm <= 50 ? 'text-rose-500' : 'text-slate-900'}`}
                  >
                    {bpm}
                  </div>
                  <span className='text-[8px] text-slate-400 font-mono'>
                    BPM
                  </span>
                </div>
                <div
                  className={`text-2xl ${streamActive ? 'animate-pulse' : ''}`}
                >
                  ❤️
                </div>
              </div>

              {/* SpO2 Card */}
              <div className='bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm flex items-center justify-between'>
                <div>
                  <div className='text-[8px] font-black uppercase tracking-wider text-slate-400 font-mono'>
                    OXYGEN LEVELS
                  </div>
                  <div
                    className={`text-xl font-black mt-1 font-mono ${o2 < 94 ? 'text-rose-500' : 'text-slate-900'}`}
                  >
                    {o2}%
                  </div>
                  <span className='text-[8px] text-slate-400 font-mono'>
                    SpO2
                  </span>
                </div>
                <div className='text-2xl'>💨</div>
              </div>
            </div>

            {/* Cloud Logs Console */}
            <div className='flex-grow bg-slate-950 rounded-3xl border border-slate-800/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] overflow-hidden font-mono text-[10.5px] text-slate-300 flex flex-col min-h-[220px]'>
              <div className='bg-slate-900 border-b border-slate-800/80 px-4 py-3 flex items-center justify-between shrink-0 select-none'>
                <span className='text-[8px] text-slate-500 font-black tracking-widest uppercase'>
                  🖥️ AWS Lambda Ingestion Logger (DynamoDB Streams)
                </span>
                <span className='text-[8px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-bold border border-indigo-500/20'>
                  LIVE STREAMING
                </span>
              </div>

              <div className='flex-grow p-5 space-y-2 overflow-auto select-text leading-relaxed text-indigo-300/90 bg-slate-950/70'>
                {systemLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`animate-fadeIn ${
                      log.includes('ALERT') || log.includes('WARN')
                        ? 'text-rose-400'
                        : log.includes('SUCCESS')
                          ? 'text-emerald-400'
                          : log.startsWith('//')
                            ? 'text-slate-500 italic'
                            : 'text-slate-300'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
