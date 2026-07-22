export default function SecurityStatusCard() {
  return (
    <div className='absolute -top-10 -right-8 bg-slate-900 text-white rounded-2xl p-3 shadow-2xl border border-slate-800 items-center gap-3 z-0 [transform:translateZ(-30px)] scale-90 pointer-events-none hidden sm:flex'>
      <div className='h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400'>
        🛡️
      </div>
      <div>
        <span className='block text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none'>
          AES-256 Key Status
        </span>
        <span className='text-[10px] font-bold text-emerald-400 flex items-center gap-1.5 mt-1'>
          Active & Rotated{' '}
          <span className='h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping' />
        </span>
      </div>
    </div>
  )
}