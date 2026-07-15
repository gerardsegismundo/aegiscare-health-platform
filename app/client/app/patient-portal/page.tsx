'use client'

import Link from 'next/link'

export default function PatientDashboard() {
  return (
    <div className='p-6 md:p-8 space-y-8 max-w-5xl mx-auto'>
      {/* Dynamic Header Welcomer */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200'>
        <div>
          <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
            Good morning, John
          </h1>
          <p className='text-slate-500 text-xs mt-1'>
            Here is a secure summary of your clinical records and schedules.
          </p>
        </div>
        <div className='flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-1.5 self-start sm:self-auto'>
          <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
          <span className='text-[10px] font-bold text-emerald-800 font-mono tracking-wider uppercase'>
            Portal Secured & Audited
          </span>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className='grid gap-6 md:grid-cols-3'>
        {/* Metric 1 */}
        <div className='bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold uppercase tracking-wider text-slate-400 font-mono'>
              Heart Rate Average
            </span>
            <span className='text-indigo-600 bg-indigo-50 rounded-lg p-1.5'>
              ❤️
            </span>
          </div>
          <div className='flex items-baseline gap-2'>
            <span className='text-3xl font-black text-slate-900'>72</span>
            <span className='text-xs text-slate-400 font-bold'>BPM</span>
          </div>
          <p className='text-[11px] text-slate-500'>
            Based on last telemetry sync yesterday.
          </p>
        </div>

        {/* Metric 2 */}
        <div className='bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold uppercase tracking-wider text-slate-400 font-mono'>
              Latest Lab Work
            </span>
            <span className='text-cyan-600 bg-cyan-50 rounded-lg p-1.5'>
              🔬
            </span>
          </div>
          <div className='flex items-baseline gap-2'>
            <span className='text-lg font-black text-slate-900'>
              Metabolic Panel
            </span>
          </div>
          <p className='text-[11px] text-emerald-600 font-bold flex items-center gap-1'>
            ✓ All values marked within normal margins.
          </p>
        </div>

        {/* Metric 3 */}
        <div className='bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold uppercase tracking-wider text-slate-400 font-mono'>
              Active Prescriptions
            </span>
            <span className='text-amber-600 bg-amber-50 rounded-lg p-1.5'>
              💊
            </span>
          </div>
          <div className='flex items-baseline gap-2'>
            <span className='text-3xl font-black text-slate-900'>2</span>
            <span className='text-xs text-slate-400 font-bold'>Active RX</span>
          </div>
          <p className='text-[11px] text-slate-500'>
            1 due for refilling in 12 days.
          </p>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className='grid gap-6 lg:grid-cols-12'>
        {/* Left Side: Schedule and Messages */}
        <div className='lg:col-span-8 space-y-6'>
          {/* Upcoming Appointment Widget */}
          <div className='bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm space-y-4'>
            <div className='flex items-center justify-between'>
              <h3 className='text-sm font-black text-slate-900 uppercase tracking-wider font-mono'>
                Upcoming Consultations
              </h3>
              <Link
                href='/patient-portal/appointments'
                className='text-xs font-bold text-indigo-600 hover:underline'
              >
                View Schedule →
              </Link>
            </div>

            <div className='rounded-2xl border border-slate-100 bg-slate-50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
              <div className='flex gap-4 items-start'>
                <div className='h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 flex flex-col items-center justify-center text-indigo-600 font-bold shrink-0'>
                  <span className='text-[10px] leading-none uppercase'>
                    Jul
                  </span>
                  <span className='text-sm leading-none'>24</span>
                </div>
                <div>
                  <h4 className='text-xs font-bold text-slate-900'>
                    Dr. Sarah Jenkins, MD
                  </h4>
                  <p className='text-[11px] text-slate-400 mt-0.5'>
                    Primary Care Consultation (Annual Physical Check)
                  </p>
                  <p className='text-[11px] text-slate-500 font-semibold mt-1'>
                    🕒 09:30 AM (PDT)
                  </p>
                </div>
              </div>
              <button className='rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 transition-all shadow-sm'>
                Join Telehealth Room
              </button>
            </div>
          </div>

          {/* Secure Messaging Preview */}
          <div className='bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm space-y-4'>
            <div className='flex items-center justify-between'>
              <h3 className='text-sm font-black text-slate-900 uppercase tracking-wider font-mono'>
                Recent Clinician Communications
              </h3>
              <Link
                href='/patient-portal/messages'
                className='text-xs font-bold text-indigo-600 hover:underline'
              >
                Open Messenger →
              </Link>
            </div>

            <div className='space-y-3'>
              <div className='p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 transition-all flex items-start gap-3'>
                <div className='h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0'>
                  SJ
                </div>
                <div className='min-w-0'>
                  <div className='flex items-center justify-between'>
                    <h5 className='text-xs font-bold text-slate-900'>
                      Dr. Sarah Jenkins, MD
                    </h5>
                    <span className='text-[10px] text-slate-400'>
                      Yesterday
                    </span>
                  </div>
                  <p className='text-[11px] text-slate-500 truncate mt-0.5'>
                    Your lipid panel looks completely healthy. Ensure you
                    maintain the same dietary habits...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Links, Auditing, Verification */}
        <div className='lg:col-span-4 space-y-6'>
          {/* Quick Upload Container */}
          <div className='bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-[2rem] p-6 shadow-md space-y-4 relative overflow-hidden'>
            <div className='absolute top-[-40%] right-[-10%] h-40 w-40 bg-white/5 blur-3xl rounded-full' />

            <h3 className='text-xs font-bold uppercase tracking-wider font-mono text-indigo-300'>
              Share Health Documents
            </h3>
            <p className='text-xs text-indigo-100 leading-relaxed'>
              Instantly secure, encrypt, and upload physical immunization
              papers, insurance copy sheets, or external physical therapy
              orders.
            </p>
            <Link
              href='/patient-portal/documents'
              className='block w-full text-center rounded-xl bg-white text-indigo-950 py-3 text-xs font-bold shadow-sm hover:bg-indigo-50 transition-all'
            >
              Upload Secure PDF
            </Link>
          </div>

          {/* Secure Care Team Widget */}
          <div className='bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm space-y-4'>
            <h3 className='text-xs font-bold uppercase tracking-wider font-mono text-slate-400'>
              Your Care Specialists
            </h3>

            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <div className='h-8 w-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs'>
                  SJ
                </div>
                <div>
                  <h4 className='text-xs font-bold text-slate-900'>
                    Dr. Sarah Jenkins
                  </h4>
                  <p className='text-[10px] text-slate-400'>
                    Primary Care Physician
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='h-8 w-8 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-xs'>
                  MA
                </div>
                <div>
                  <h4 className='text-xs font-bold text-slate-900'>
                    Marcus Aurelius
                  </h4>
                  <p className='text-[10px] text-slate-400'>
                    Physical Therapist
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
