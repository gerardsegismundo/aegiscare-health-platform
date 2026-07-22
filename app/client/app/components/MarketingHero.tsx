import Link from 'next/link'

export default function MarketingHero() {
  return (
    <div className='flex flex-col justify-center lg:w-[45%] shrink-0 space-y-5 max-w-xl py-4'>
      {/* Platform Status Badge */}
      <div className='inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 self-start'>
        <span className='w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse' />
        <span className='text-[12px] font-black text-indigo-700 tracking-widest uppercase font-mono'>
          Platform Active
        </span>
      </div>

      {/* Main Headline */}
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight'>
        A secure cloud platform for connected <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500'>
          digital healthcare.
        </span>
      </h1>

      {/* Description */}
      <p className='text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md'>
        A HIPAA-focused healthcare platform demonstrating secure
        authentication, encrypted data management, high availability, and
        cloud-native architecture.
      </p>

      {/* CTA Buttons */}
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
            href='/live-demo'
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

      {/* Compliance Badges */}
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
              HIPAA-Aligned Security
            </h4>
            <p className='text-[12px] text-slate-400'>
              Patient data protection with encryption.
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
              AWS Cloud Architecture
            </h4>
            <p className='text-[12px] text-slate-400'>
              Secure and scalable infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}