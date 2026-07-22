export default function AppointmentsTab() {
  return (
    <div className='bg-white rounded-xl border border-slate-200/90 p-3 w-full flex flex-col justify-between space-y-2.5 shadow-xs'>
      <div className='flex justify-between items-center shrink-0'>
        <span className='text-[7px] font-black text-slate-900 uppercase tracking-wider font-mono'>
          Clinical Appts
        </span>
        <button className='text-[6.5px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-2 py-0.5 rounded-md transition-all shadow-xs'>
          + Schedule Appt
        </button>
      </div>
      <div className='flex-grow space-y-2 overflow-y-auto pr-0.5'>
        <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center hover:bg-slate-100/50 transition-colors'>
          <div>
            <h4 className='text-[8.5px] font-black text-slate-900'>
              Cardiology Follow-Up
            </h4>
            <p className='text-[7px] text-slate-500'>
              With Dr. Jenkins • 10:00 AM PST
            </p>
          </div>
          <span className='text-[6.5px] font-black font-mono px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md'>
            Jul 24, 2026
          </span>
        </div>
        <div className='p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center hover:bg-slate-100/50 transition-colors'>
          <div>
            <h4 className='text-[8.5px] font-black text-slate-900'>
              General Telehealth
            </h4>
            <p className='text-[7px] text-slate-500'>
              With Specialist Robin
            </p>
          </div>
          <span className='text-[6.5px] font-black font-mono px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md'>
            Aug 05, 2026
          </span>
        </div>
      </div>
    </div>
  )
}