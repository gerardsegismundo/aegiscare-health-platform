// components/Footer.jsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200/50 text-[12px] text-slate-400 z-10 relative shrink-0 gap-2'>
      <span>
        © {new Date().getFullYear()} AegisCare Inc. All clinical data is
        securely managed.
      </span>
      <div className='flex items-center gap-4'>
        <Link
          href='/privacy-policy'
          className='hover:text-slate-700 transition-colors'
        >
          Privacy Policy
        </Link>
        <Link
          href='/terms-of-service'
          className='hover:text-slate-700 transition-colors'
        >
          Terms of Service
        </Link>
        <Link
          href='/contact-support'
          className='hover:text-slate-700 transition-colors'
        >
          Contact Support
        </Link>
      </div>
    </footer>
  )
}
