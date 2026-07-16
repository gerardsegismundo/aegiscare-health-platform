'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PatientPortalLayout({ children }) {
  const pathname = usePathname()

  // Dynamic Navigation Items with customized clean SVGs
  const navItems = [
    {
      name: 'Dashboard',
      href: '/patient-portal',
      icon: (
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z'
          />
        </svg>
      ),
    },
    {
      name: 'Appointments',
      href: '/patient-portal/appointments',
      icon: (
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z'
          />
        </svg>
      ),
    },
    {
      name: 'Medical Records',
      href: '/patient-portal/medical-records',
      icon: (
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          />
        </svg>
      ),
    },
    {
      name: 'Documents',
      href: '/patient-portal/documents',
      icon: (
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
          />
        </svg>
      ),
    },
    {
      name: 'Messages',
      href: '/patient-portal/messages',
      icon: (
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
          />
        </svg>
      ),
    },
    {
      name: 'Profile',
      href: '/patient-portal/profile',
      icon: (
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />
        </svg>
      ),
    },
  ]

  return (
    <div className='flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden'>
      {/* Sidebar navigation container */}
      <aside className='hidden md:flex flex-col w-64 bg-white border-r border-slate-200 shrink-0'>
        {/* Brand Header */}
        <div className='p-6 border-b border-slate-200 shrink-0'>
          <Link
            href='/'
            className='flex items-center gap-3 text-xl font-black tracking-tight text-slate-900'
          >
            <div className='flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-indigo-600 p-[1px] shadow-sm'>
              <span className='flex h-full w-full items-center justify-center rounded-[11px] bg-white text-xs font-bold text-indigo-600'>
                Æ
              </span>
            </div>
            AegisCare
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className='flex-grow p-4 space-y-1.5 overflow-y-auto'>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-150 ${
                  isActive
                    ? 'bg-slate-100 text-indigo-600'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Static Patient User Info Card */}
        <div className='p-4 border-t border-slate-200 bg-slate-50/50 shrink-0'>
          <div className='flex items-center gap-3 p-2'>
            <div className='h-9 w-9 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center font-bold text-white text-sm'>
              JD
            </div>
            <div className='min-w-0'>
              <p className='text-xs font-black text-slate-900 truncate'>
                John Doe
              </p>
              <p className='text-[10px] font-mono text-slate-400 truncate'>
                DOB: 10/14/1990
              </p>
            </div>
          </div>
          <Link
            href='/login'
            className='mt-3 flex items-center justify-center gap-2 w-full rounded-xl border border-slate-200 bg-white hover:bg-slate-50 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-all shadow-sm'
          >
            🔑 Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content Render Box */}
      <div className='flex flex-col flex-grow min-w-0 overflow-y-auto relative'>
        <header className='md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 shrink-0'>
          <div className='flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-indigo-600 text-white font-bold text-xs'>
            Æ
          </div>
          <span className='text-sm font-bold text-slate-900'>
            AegisCare Portal
          </span>
          <Link href='/login' className='text-xs font-bold text-slate-500'>
            Sign Out
          </Link>
        </header>

        <main className='flex-grow'>{children}</main>
      </div>
    </div>
  )
}
