export default function RecordsTab() {
  const records = [
    {
      title: 'Lipid Wellness Screen',
      date: 'May 12, 2026',
      status: 'Approved',
    },
    {
      title: 'Metabolic Comprehensive Panel',
      date: 'Jan 18, 2026',
      status: 'Approved',
    },
    {
      title: 'ECG Electrocardiogram',
      date: 'Nov 02, 2025',
      status: 'Archived',
    },
  ]

  return (
    <div className='bg-white rounded-xl border border-slate-200/90 p-3 w-full flex flex-col justify-between space-y-2.5 shadow-xs'>
      <span className='text-[7px] font-black text-slate-900 uppercase tracking-wider font-mono shrink-0'>
        Laboratory Records
      </span>
      <div className='flex-grow space-y-1.5 overflow-y-auto pr-0.5'>
        {records.map((rec, i) => (
          <div
            key={i}
            className='p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center hover:bg-slate-100/50 transition-colors'
          >
            <div>
              <h4 className='text-[8.5px] font-black text-slate-900'>
                {rec.title}
              </h4>
              <p className='text-[7px] text-slate-500'>
                {rec.date}
              </p>
            </div>
            <span
              className={`text-[6px] font-black px-1.5 py-0.5 rounded-md ${rec.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-slate-100 text-slate-600'}`}
            >
              {rec.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}