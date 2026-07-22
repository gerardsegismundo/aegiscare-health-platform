import { TabType } from '@/types/aegis'
import PortalSidebar from './PortalSidebar'
import SecurityStatusCard from './SecurityStatusCard'
import LivePulseCard from './LivePulseCard'

interface BrowserMockupProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
  liveBpm: number
  children: React.ReactNode
}

export default function BrowserMockup({ activeTab, onTabChange, liveBpm, children }: BrowserMockupProps) {
  return (
    <div className='relative w-full max-w-xl [transform:perspective(1200px)_rotateY(-10deg)_rotateX(5deg)] hover:[transform:perspective(1200px)_rotateY(-3deg)_rotateX(1deg)] transition-all duration-700 ease-out'>
      <SecurityStatusCard />

      {/* Grid Background behind browser */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40 pointer-events-none' />

      {/* Main Interactive Browser Frame */}
      <div className='relative bg-white/95 backdrop-blur-md border border-slate-200 rounded-3xl shadow-[0_25px_60px_-15px_rgba(99,102,241,0.15),0_0_1px_1px_rgba(99,102,241,0.05)] overflow-hidden z-10'>
        {/* Chrome bar */}
        <div className='bg-slate-50 border-b border-slate-200/80 px-4 py-3 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='w-2.5 h-2.5 rounded-full bg-red-400/80' />
            <span className='w-2.5 h-2.5 rounded-full bg-yellow-400/80' />
            <span className='w-2.5 h-2.5 rounded-full bg-green-400/80' />
          </div>
          <div className='flex items-center gap-2 bg-white border border-slate-200/60 rounded-lg px-4 py-1 text-[9px] font-mono text-slate-500 w-[55%] justify-center shadow-inner'>
            <span className='text-emerald-500 font-bold'>🔒 Secure</span>
            <span className='text-slate-300'>|</span>
            <span className='truncate select-none'>portal.aegiscare.io/patient</span>
          </div>
          <div className='w-10 h-1.5 bg-slate-200 rounded-full' />
        </div>

        {/* Portal Content Workspace */}
        <div className='flex min-h-[340px] sm:min-h-[370px] bg-white'>
          <PortalSidebar activeTab={activeTab} onTabChange={onTabChange} />
          <div className='flex-grow p-4 bg-slate-50/30 flex flex-col justify-between space-y-4 min-w-0'>
            <div className='flex items-center justify-between border-b border-slate-200/60 pb-3 shrink-0'>
              <div className='space-y-1'>
                <h2 className='text-[13px] sm:text-[14px] font-black text-slate-900 tracking-tight leading-tight capitalize'>
                  {activeTab === 'dashboard' ? 'Welcome back, Taena' : `${activeTab} Hub`}
                </h2>
                <p className='text-[8px] text-slate-400 leading-none'>
                  {activeTab === 'dashboard'
                    ? 'Your telemetry trends are fully secured and updated.'
                    : `Private HIPAA ${activeTab} records.`}
                </p>
              </div>
              <div className='flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full shrink-0 shadow-xs'>
                <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />
                <span className='text-[6px] font-black uppercase text-emerald-800 font-mono tracking-wider'>
                  HIPAA SECURED
                </span>
              </div>
            </div>
            <div className='flex-grow flex items-stretch min-h-0'>
              {children}
            </div>
          </div>
        </div>
      </div>

      <LivePulseCard liveBpm={liveBpm} />
    </div>
  )
}