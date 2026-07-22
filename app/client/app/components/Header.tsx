import Link from 'next/link'

export default function Header() {
  return (
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
        <Link href='/explore-platform' className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'>
          Explore Platform
        </Link>
        <Link href='/learn-more' className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'>
          Learn More
        </Link>
        <Link href='/security-whitepaper' className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'>
          Security Whitepaper
        </Link>
      </nav>

      <Link href='/login' className='rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2 text-xs font-black text-slate-700 shadow-sm transition-all'>
        Portal Login
      </Link>
    </header>
  )
}