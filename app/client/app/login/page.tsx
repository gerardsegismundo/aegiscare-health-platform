'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('provider')

  // Form State
  const [providerEmail, setProviderEmail] = useState('')
  const [providerPassword, setProviderPassword] = useState('')
  const [patientEmail, setPatientEmail] = useState('')
  const [patientPassword, setPatientPassword] = useState('')

  const handleProviderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TEMPORARY: Redirect providers to their dashboard
    router.push('/dashboard')
  }

  const handlePatientSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TEMPORARY: Direct redirect straight to the patient portal
    router.push('/patient-portal')
  }

  return (
    <main className='w-full bg-slate-50 text-slate-900 selection:bg-cyan-500/10 selection:text-cyan-900 relative flex flex-col justify-between min-h-screen overflow-x-hidden'>
      {/* Ambient background glows */}
      <div className='absolute top-[-20%] left-[-10%] -z-10 h-[900px] w-[900px] rounded-full bg-indigo-500/5 blur-[180px] pointer-events-none' />
      <div className='absolute bottom-[-20%] right-[-10%] -z-10 h-[900px] w-[900px] rounded-full bg-cyan-500/5 blur-[180px] pointer-events-none' />

      {/* Header */}
      <header className='w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md shrink-0'>
        <div className='mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4'>
          <Link
            href='/'
            className='flex items-center gap-3 text-2xl font-black tracking-tight text-slate-900'
          >
            <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/5'>
              <span className='flex h-full w-full items-center justify-center rounded-[10px] bg-white text-sm font-bold text-cyan-600'>
                Æ
              </span>
            </div>
            AegisCare
          </Link>
          <Link
            href='/'
            className='rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2 text-sm font-bold text-slate-700 transition-all shadow-sm'
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Card */}
      <section className='mx-auto w-full max-w-[1400px] px-8 py-8 flex items-center justify-center flex-grow'>
        <div className='w-full max-w-md relative'>
          <div className='absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-5 blur-3xl pointer-events-none' />

          <div className='relative rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-100/40 space-y-6'>
            {/* Tab Switcher */}
            <div className='grid grid-cols-2 p-1 bg-slate-100 rounded-xl'>
              <button
                onClick={() => setActiveTab('provider')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'provider'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-550 hover:text-slate-900'
                }`}
              >
                Clinical Portal
              </button>
              <button
                onClick={() => setActiveTab('patient')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'patient'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-550 hover:text-slate-900'
                }`}
              >
                Patient Portal
              </button>
            </div>

            {/* Forms */}
            {activeTab === 'provider' ? (
              <form onSubmit={handleProviderSubmit} className='space-y-4'>
                <div className='text-center sm:text-left'>
                  <h2 className='text-xl font-black text-slate-900 tracking-tight'>
                    Enterprise Gateway
                  </h2>
                  <p className='text-slate-500 text-[11px] mt-1'>
                    Access clinical workflows, database integrations, and
                    audits.
                  </p>
                </div>

                <div className='space-y-3'>
                  <div>
                    <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
                      Work Email
                    </label>
                    <input
                      type='email'
                      required
                      value={providerEmail}
                      onChange={(e) => setProviderEmail(e.target.value)}
                      className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:border-cyan-500/50 focus:bg-white focus:outline-none'
                    />
                  </div>
                  <div>
                    <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
                      Password
                    </label>
                    <input
                      type='password'
                      required
                      value={providerPassword}
                      onChange={(e) => setProviderPassword(e.target.value)}
                      className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:border-cyan-500/50 focus:bg-white focus:outline-none'
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-3 text-sm font-bold text-white shadow-md hover:brightness-105 transition-all'
                >
                  Verify Credentials
                </button>

                <div className='text-center pt-4 border-t border-slate-100'>
                  <p className='text-xs text-slate-500'>
                    Need an enterprise workspace?{' '}
                    <Link
                      href='/request-access'
                      className='font-semibold text-indigo-600 hover:text-indigo-700 underline decoration-indigo-200 transition-all'
                    >
                      Request Access
                    </Link>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handlePatientSubmit} className='space-y-4'>
                <div className='text-center sm:text-left'>
                  <h2 className='text-xl font-black text-slate-900 tracking-tight'>
                    Patient Portal
                  </h2>
                  <p className='text-slate-500 text-[11px] mt-1'>
                    Access your secure health records, care plans, and
                    messaging.
                  </p>
                </div>

                <div className='space-y-3'>
                  <div>
                    <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      // required
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:border-cyan-500/50 focus:bg-white focus:outline-none'
                    />
                  </div>
                  <div>
                    <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
                      Password
                    </label>
                    <input
                      type='password'
                      // required
                      value={patientPassword}
                      onChange={(e) => setPatientPassword(e.target.value)}
                      className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:border-cyan-500/50 focus:bg-white focus:outline-none'
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-3 text-sm font-bold text-white shadow-md hover:brightness-105 transition-all'
                >
                  Sign In to Portal
                </button>

                <div className='text-center pt-4 border-t border-slate-100'>
                  <p className='text-xs text-slate-500'>
                    Received an activation code?{' '}
                    <span className='font-semibold text-slate-400 cursor-not-allowed'>
                      Activate Account (Coming Soon)
                    </span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
