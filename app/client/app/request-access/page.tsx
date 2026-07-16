'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

type RequestAccessFormValues = {
  firstName: string
  lastName: string
  workEmail: string
  orgName: string
  role: string
  usecase: string
}

export default function RequestAccessPage() {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState<RequestAccessFormValues>({
    firstName: '',
    lastName: '',
    workEmail: '',
    orgName: '',
    role: 'Clinical Provider (MD, DO, NP, PA)',
    usecase: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev: RequestAccessFormValues) => ({ ...prev, [id]: value }))

    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }))
    }
  }

  const validateForm = () => {
    const tempErrors: Partial<Record<keyof RequestAccessFormValues, string>> = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.firstName.trim()) {
      tempErrors.firstName = 'First name is required.'
    }
    if (!formData.lastName.trim()) {
      tempErrors.lastName = 'Last name is required.'
    }

    if (!formData.workEmail.trim()) {
      tempErrors.workEmail = 'Work email is required.'
    } else if (!emailRegex.test(formData.workEmail)) {
      tempErrors.workEmail = 'Please enter a valid email address.'
    } else if (
      formData.workEmail.endsWith('@gmail.com') ||
      formData.workEmail.endsWith('@yahoo.com') ||
      formData.workEmail.endsWith('@hotmail.com')
    ) {
      tempErrors.workEmail =
        'An institutional or corporate email address is required.'
    }

    if (!formData.orgName.trim()) {
      tempErrors.orgName = 'Organization or clinic name is required.'
    }

    if (!formData.usecase.trim()) {
      tempErrors.usecase =
        'Please detail your planned integration requirements.'
    } else if (formData.usecase.trim().length < 15) {
      tempErrors.usecase =
        'Please provide a slightly more detailed explanation.'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
    }
  }

  const getInputStyles = (fieldId: string) => {
    const base =
      'w-full rounded-xl bg-slate-50 border px-4 py-2.5 text-sm focus:bg-white focus:outline-none transition-all duration-200'
    if (errors[fieldId]) {
      return `${base} border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20`
    }
    return `${base} border-slate-200 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20`
  }

  return (
    <main className='w-full bg-slate-50 text-slate-900 selection:bg-cyan-500/10 selection:text-cyan-900 relative flex flex-col justify-between min-h-screen overflow-x-hidden'>
      {/* Soft Ambient Clinical Glows */}
      <div className='absolute top-[-20%] left-[-10%] -z-10 h-[900px] w-[900px] rounded-full bg-indigo-500/5 blur-[180px] pointer-events-none' />
      <div className='absolute bottom-[-20%] right-[-10%] -z-10 h-[900px] w-[900px] rounded-full bg-cyan-500/5 blur-[180px] pointer-events-none' />

      {/* Header */}
      <header className='w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md shrink-0'>
        <div className='mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4'>
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

          <Link
            href='/'
            className='rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2 text-sm font-bold text-slate-700 transition-all shadow-sm hover:border-slate-300'
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Form Container */}
      <section className='mx-auto w-full max-w-[1400px] px-8 py-4 md:py-8 flex items-center justify-center flex-grow'>
        <div className='grid gap-12 lg:grid-cols-12 lg:gap-16 items-center w-full max-w-5xl'>
          {/* Left Column: Context */}
          <div className='lg:col-span-5 space-y-5 hidden lg:block'>
            <span className='text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 font-mono'>
              Enterprise Onboarding
            </span>
            <h1 className='text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]'>
              Request secure gateway credentials.
            </h1>
            <p className='text-slate-500 text-xs leading-relaxed'>
              To remain fully compliant with HIPAA regulations, all AegisCare
              workspace provisions require direct verification of professional
              clinical credentials.
            </p>

            <div className='pt-5 border-t border-slate-200 space-y-3'>
              <div className='flex gap-3'>
                <span className='text-lg'>⏱️</span>
                <div>
                  <h4 className='text-xs font-bold text-slate-900'>
                    Vetting Timeline
                  </h4>
                  <p className='text-slate-500 text-[11px] mt-0.5'>
                    Most validation requests are thoroughly reviewed and
                    initialized within 2 business hours.
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className='text-lg'>📦</span>
                <div>
                  <h4 className='text-xs font-bold text-slate-900'>
                    Sandbox Trial Included
                  </h4>
                  <p className='text-slate-500 text-[11px] mt-0.5'>
                    Qualified providers receive a secure, isolated sandbox to
                    test point-to-point database queries safely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Card */}
          <div className='lg:col-span-7 w-full relative'>
            <div className='absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-5 blur-3xl pointer-events-none' />

            <div className='relative rounded-[2rem] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl shadow-slate-100/40'>
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className='space-y-4'>
                  <div className='text-center sm:text-left'>
                    <h2 className='text-xl font-black text-slate-900 tracking-tight'>
                      Onboarding Request
                    </h2>
                    <p className='text-slate-500 text-[11px] mt-1'>
                      Provide your details to request database workspace keys.
                    </p>
                  </div>

                  {/* Name Row */}
                  <div className='grid gap-4 sm:grid-cols-2'>
                    <div>
                      <label
                        className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'
                        htmlFor='firstName'
                      >
                        First Name
                      </label>
                      <input
                        id='firstName'
                        type='text'
                        value={formData.firstName}
                        onChange={handleChange}
                        className={getInputStyles('firstName')}
                      />
                      {errors.firstName && (
                        <p className='text-rose-500 text-[10px] mt-1 flex items-center gap-1 font-medium'>
                          ⚠️ {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'
                        htmlFor='lastName'
                      >
                        Last Name
                      </label>
                      <input
                        id='lastName'
                        type='text'
                        value={formData.lastName}
                        onChange={handleChange}
                        className={getInputStyles('lastName')}
                      />
                      {errors.lastName && (
                        <p className='text-rose-500 text-[10px] mt-1 flex items-center gap-1 font-medium'>
                          ⚠️ {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'
                      htmlFor='workEmail'
                    >
                      Work / Enterprise Email
                    </label>
                    <input
                      id='workEmail'
                      type='email'
                      value={formData.workEmail}
                      onChange={handleChange}
                      className={getInputStyles('workEmail')}
                    />
                    {errors.workEmail && (
                      <p className='text-rose-500 text-[10px] mt-1 flex items-center gap-1 font-medium'>
                        ⚠️ {errors.workEmail}
                      </p>
                    )}
                  </div>

                  {/* Org / Role */}
                  <div className='grid gap-4 sm:grid-cols-2'>
                    <div>
                      <label
                        className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'
                        htmlFor='orgName'
                      >
                        Organization Name
                      </label>
                      <input
                        id='orgName'
                        type='text'
                        value={formData.orgName}
                        onChange={handleChange}
                        className={getInputStyles('orgName')}
                      />
                      {errors.orgName && (
                        <p className='text-rose-500 text-[10px] mt-1 flex items-center gap-1 font-medium'>
                          ⚠️ {errors.orgName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'
                        htmlFor='role'
                      >
                        Your Role
                      </label>
                      <select
                        id='role'
                        value={formData.role}
                        onChange={handleChange}
                        className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:border-cyan-500/50 focus:bg-white focus:outline-none text-slate-600'
                      >
                        <option>Clinical Provider (MD, DO, NP, PA)</option>
                        <option>Practice Manager / Clinic Administrator</option>
                        <option>Healthcare IT / Security Officer</option>
                        <option>
                          Healthcare Executive (CMO, CEO, Director)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Use Case */}
                  <div>
                    <label
                      className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'
                      htmlFor='usecase'
                    >
                      Clinical Use-Case / Requirements
                    </label>
                    <textarea
                      id='usecase'
                      rows={2}
                      value={formData.usecase}
                      onChange={handleChange}
                      className={getInputStyles('usecase')}
                    />
                    {errors.usecase && (
                      <p className='text-rose-500 text-[10px] mt-1 flex items-center gap-1 font-medium'>
                        ⚠️ {errors.usecase}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    className='w-full rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-500/10 hover:shadow-cyan-500/20 hover:brightness-105 transition-all hover:scale-[1.01]'
                  >
                    Submit Access Request
                  </button>
                </form>
              ) : (
                /* Post-Submission Success State */
                <div className='text-center py-8 space-y-5'>
                  <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl'>
                    ✅
                  </div>
                  <div className='space-y-1.5'>
                    <h3 className='text-lg font-bold text-slate-900'>
                      Credentials Received
                    </h3>
                    <p className='text-slate-500 text-xs max-w-xs mx-auto leading-relaxed'>
                      Our security and integration team is initiating validation
                      of your professional registry details. Look out for a
                      verification email shortly.
                    </p>
                  </div>
                  <div className='pt-2'>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({
                          firstName: '',
                          lastName: '',
                          workEmail: '',
                          orgName: '',
                          role: 'Clinical Provider (MD, DO, NP, PA)',
                          usecase: '',
                        })
                      }}
                      className='inline-block rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2.5 text-xs font-bold text-slate-700 transition-all shadow-sm'
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
