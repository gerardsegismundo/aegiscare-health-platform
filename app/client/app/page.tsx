'use client'

import Link from 'next/link'
import Footer from '@/components/Footer'

export default function HomePage() {
  const features = [
    {
      title: 'Zero-Trust Patient Portals',
      description:
        'Provide patients with direct, isolated database queries that secure PHI under point-to-point AES-256 encryption.',
      icon: (
        <svg
          className='h-6 w-6 text-indigo-600'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
          />
        </svg>
      ),
    },
    {
      title: 'Real-time Auditing & Telemetry',
      description:
        'Continuous compliance tracking with automated, tamper-proof logs generated for every single data handshake.',
      icon: (
        <svg
          className='h-6 w-6 text-cyan-600'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          />
        </svg>
      ),
    },
    {
      title: 'Isolated Resource Provisioning',
      description:
        'Instantly deploy containerized healthcare databases. Zero shared-state risks between providers, portals, or devices.',
      icon: (
        <svg
          className='h-6 w-6 text-indigo-600'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
          />
        </svg>
      ),
    },
  ]

  return (
    <main className='min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500/10 selection:text-cyan-900 overflow-x-hidden relative flex flex-col justify-between'>
      {/* Ambient Background Glows */}
      <div className='absolute top-[-10%] left-[-20%] -z-10 h-[1000px] w-[1000px] rounded-full bg-indigo-500/5 blur-[220px] pointer-events-none' />
      <div className='absolute top-[40%] right-[-10%] -z-10 h-[1000px] w-[1000px] rounded-full bg-cyan-500/5 blur-[220px] pointer-events-none' />

      {/* Header */}
      <header className='w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50'>
        <div className='mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5'>
          <Link
            href='/'
            className='flex items-center gap-3 text-2xl font-black tracking-tight text-slate-900 hover:opacity-90 transition-opacity'
          >
            <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/5'>
              <span className='flex h-full w-full items-center justify-center rounded-[10px] bg-white text-sm font-bold text-cyan-600'>
                Æ
              </span>
            </div>
            AegisCare
          </Link>

          <nav className='hidden md:flex items-center gap-8'>
            <Link
              href='#features'
              className='text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors'
            >
              Features
            </Link>
            <Link
              href='#security'
              className='text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors'
            >
              Security Architecture
            </Link>
            <Link
              href='/security-whitepaper'
              className='text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors'
            >
              Documentation
            </Link>
          </nav>

          <Link
            href='/login'
            className='rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-500/10 hover:shadow-cyan-500/20 hover:brightness-105 transition-all hover:scale-[1.01]'
          >
            Access Portal
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className='mx-auto w-full max-w-[1400px] px-8 pt-20 pb-16 md:pt-32 md:pb-24 flex items-center justify-center flex-grow'>
        <div className='grid gap-16 lg:grid-cols-12 lg:gap-24 items-center w-full'>
          {/* Left Hero Column */}
          <div className='lg:col-span-7 space-y-8'>
            <div className='inline-flex items-center gap-2 rounded-full bg-indigo-500/5 px-3.5 py-1.5 text-xs font-mono font-semibold text-indigo-700 border border-indigo-500/10 uppercase tracking-wider'>
              🚀 Next-Gen HIPAA Infrastructure
            </div>
            <h1 className='text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 xl:text-6xl'>
              The secure data layer for modern healthcare systems.
            </h1>
            <p className='text-slate-500 leading-relaxed text-lg max-w-xl'>
              AegisCare streamlines point-to-point database connectivity for
              providers, administrators, and patients. Zero-trust by design,
              fully audit-ready, and built to the highest medical standards.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
              <Link
                href='/login'
                className='w-full sm:w-auto text-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-md shadow-indigo-500/10 hover:shadow-cyan-500/20 hover:brightness-105 transition-all hover:scale-[1.01]'
              >
                Access Portal Gateways
              </Link>
              <Link
                href='/security-whitepaper'
                className='w-full sm:w-auto text-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-8 py-4 text-sm font-bold text-slate-700 transition-all shadow-sm hover:border-slate-300'
              >
                Read Security Whitepaper
              </Link>
            </div>

            {/* Compliance Trust Indicators */}
            <div className='pt-8 border-t border-slate-200/60'>
              <p className='text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4'>
                Engineered to comply with:
              </p>
              <div className='flex flex-wrap gap-6 items-center'>
                <span className='text-sm font-extrabold tracking-wider text-slate-400 font-mono'>
                  HIPAA
                </span>
                <span className='text-sm font-extrabold tracking-wider text-slate-400 font-mono'>
                  SOC 2 TYPE II
                </span>
                <span className='text-sm font-extrabold tracking-wider text-slate-400 font-mono'>
                  GDPR
                </span>
                <span className='text-sm font-extrabold tracking-wider text-slate-400 font-mono'>
                  HITECH
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Visual Telemetry Mockup */}
          <div className='lg:col-span-5 w-full relative'>
            <div className='absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-5 blur-3xl pointer-events-none' />

            {/* Live-looking Telemetry Panel */}
            <div className='relative rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-100/40'>
              <div className='flex items-center justify-between pb-6 border-b border-slate-100'>
                <div className='flex items-center gap-2.5'>
                  <span className='relative flex h-2 w-2'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-2 w-2 bg-cyan-500'></span>
                  </span>
                  <span className='text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest'>
                    Active Gateway Nodes
                  </span>
                </div>
                <span className='text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md'>
                  Live Stream
                </span>
              </div>

              {/* Fake Network Graph / Node Stat List */}
              <div className='space-y-5 pt-6'>
                <div className='flex items-center justify-between p-3 bg-slate-50 border border-slate-200/60 rounded-xl'>
                  <div>
                    <p className='text-xs font-bold text-slate-800'>
                      East-Coast Patient Portal
                    </p>
                    <p className='text-[10px] font-mono text-slate-400'>
                      Node: AC-US-E1
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-xs font-semibold text-emerald-600'>
                      99.99% TLS
                    </p>
                    <p className='text-[10px] font-mono text-slate-400'>
                      0.02ms latency
                    </p>
                  </div>
                </div>

                <div className='flex items-center justify-between p-3 bg-slate-50 border border-slate-200/60 rounded-xl'>
                  <div>
                    <p className='text-xs font-bold text-slate-800'>
                      Clinical Workstation Sync
                    </p>
                    <p className='text-[10px] font-mono text-slate-400'>
                      Node: AC-US-W2
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-xs font-semibold text-emerald-600'>
                      100% Secure
                    </p>
                    <p className='text-[10px] font-mono text-slate-400'>
                      Isolated Instance
                    </p>
                  </div>
                </div>

                <div className='flex items-center justify-between p-3 bg-slate-50 border border-slate-200/60 rounded-xl'>
                  <div>
                    <p className='text-xs font-bold text-slate-800'>
                      Telemetry Log Mirror
                    </p>
                    <p className='text-[10px] font-mono text-slate-400'>
                      Node: AC-EU-C1
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-xs font-semibold text-emerald-600'>
                      Sync Active
                    </p>
                    <p className='text-[10px] font-mono text-slate-400'>
                      Encrypted Hash
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-6 p-4 bg-indigo-50/40 rounded-2xl border border-indigo-100 flex items-center gap-4'>
                <span className='text-2xl'>🛡️</span>
                <div>
                  <h4 className='text-xs font-extrabold text-indigo-950'>
                    Aegis Protection Shield
                  </h4>
                  <p className='text-[10px] text-indigo-800/80 mt-0.5'>
                    All infrastructure layers are configured off public
                    networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid Section */}
      <section
        id='features'
        className='border-t border-slate-200 bg-white py-24 md:py-32'
      >
        <div className='mx-auto w-full max-w-[1400px] px-8'>
          <div className='text-center max-w-2xl mx-auto mb-16'>
            <span className='text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 font-mono'>
              Precision Architecture
            </span>
            <h2 className='text-3xl font-extrabold text-slate-900 mt-3 tracking-tight sm:text-4xl'>
              Designed for the strict realities of healthcare compliance.
            </h2>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {features.map((feat, idx) => (
              <div
                key={idx}
                className='p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300'
              >
                <div className='h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm'>
                  {feat.icon}
                </div>
                <h3 className='text-lg font-extrabold text-slate-900 mt-6'>
                  {feat.title}
                </h3>
                <p className='text-slate-500 text-sm mt-3.5 leading-relaxed'>
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action Section */}
      <section className='bg-slate-50 border-t border-slate-200 py-24'>
        <div className='mx-auto w-full max-w-[1400px] px-8 text-center space-y-6'>
          <h2 className='text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl'>
            Ready to secure your clinical workloads?
          </h2>
          <p className='text-slate-500 max-w-lg mx-auto text-base'>
            Configure secure portals, establish E2EE API connections, or query
            telehealth database partitions in seconds.
          </p>
          <div className='pt-4'>
            <Link
              href='/login'
              className='inline-block rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-md shadow-indigo-500/10 hover:shadow-cyan-500/20 hover:brightness-105 transition-all hover:scale-[1.01]'
            >
              Enter Gateway Portal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
