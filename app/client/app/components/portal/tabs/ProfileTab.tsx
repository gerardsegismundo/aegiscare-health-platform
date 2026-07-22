export default function ProfileTab() {
  return (
    <div className='bg-white rounded-xl border border-slate-200/90 p-3.5 w-full flex flex-col justify-between space-y-3 shadow-xs'>
      <div className='flex items-center gap-3.5 border-b border-slate-200/60 pb-3 shrink-0'>
        <div className='w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500/10 shrink-0 shadow-xs'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
            alt='Taena Mu Profile Avatar'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <h3 className='text-[11px] font-black text-slate-900'>
            Taena Mu
          </h3>
          <p className='text-[7px] text-slate-400 font-mono'>
            Registered Clinical Patient
          </p>
        </div>
      </div>

      <div className='flex-grow grid grid-cols-2 gap-2 text-[7.5px] overflow-y-auto pr-0.5'>
        <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg'>
          <span className='text-[6px] text-slate-400 block font-mono'>
            EMAIL ADDRESS
          </span>
          <span className='font-bold text-slate-800 break-all'>
            taena.mu@aegiscare.io
          </span>
        </div>
        <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg'>
          <span className='text-[6px] text-slate-400 block font-mono'>
            PRIMARY PHONE
          </span>
          <span className='font-bold text-slate-800'>
            +1 (555) 234-5678
          </span>
        </div>
        <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg'>
          <span className='text-[6px] text-slate-400 block font-mono'>
            INSURANCE ID
          </span>
          <span className='font-bold text-slate-800 font-mono'>
            #AEG-7822-MD
          </span>
        </div>
        <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg'>
          <span className='text-[6px] text-slate-400 block font-mono'>
            PRIMARY PROVIDER
          </span>
          <span className='font-bold text-slate-800'>
            Dr. Allison Jenkins
          </span>
        </div>
      </div>
    </div>
  )
}