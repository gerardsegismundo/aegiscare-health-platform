import { TabType } from '@/types/aegis'
import { NAV_ITEMS } from '@/constants/vitalsData'

interface PortalSidebarProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export default function PortalSidebar({ activeTab, onTabChange }: PortalSidebarProps) {
  return (
    <aside className='w-32 sm:w-36 bg-slate-50/50 border-r border-slate-200/80 p-3 flex flex-col justify-between shrink-0'>
      <div className='space-y-5'>
        {/* Logo */}
        <div className='flex items-center gap-2 text-[13px] font-black tracking-tight text-slate-900'>
          <div className='flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 shadow-md shadow-indigo-200 text-[10px] font-black text-white shrink-0'>
            Æ
          </div>
          AegisCare
        </div>

        {/* Sidebar Nav Links */}
        <nav className='space-y-1'>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full text-left px-2.5 py-1.5 text-[9px] font-extrabold rounded-lg transition-all flex items-center gap-2 border ${
                activeTab === item.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/10'
                  : 'text-slate-500 hover:text-slate-900 border-transparent hover:bg-slate-200/40'
              }`}
            >
              <span className='text-[12px]'>{item.icon}</span>
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
  )
}