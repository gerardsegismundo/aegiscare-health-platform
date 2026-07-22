interface LivePulseCardProps {
  liveBpm: number
}

export default function LivePulseCard({ liveBpm }: LivePulseCardProps) {
  return (
    <div className='absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/80 items-center gap-3 z-20 [transform:translateZ(40px)] scale-95 pointer-events-none hidden sm:flex'>
      <div className='h-9 w-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 relative shrink-0'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-xl bg-red-400 opacity-20' />
        ❤️
      </div>
      <div>
        <span className='block text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none'>
          Wearable Pulse
        </span>
        <span className='text-[14px] font-black text-slate-900 flex items-baseline gap-1 mt-1'>
          {liveBpm}{' '}
          <span className='text-[8px] text-slate-400 font-medium'>
            bpm
          </span>
        </span>
      </div>
    </div>
  )
}