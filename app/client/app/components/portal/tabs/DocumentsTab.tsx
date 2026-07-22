export default function DocumentsTab() {
  const documents = [
    {
      name: 'HIPAA_Consent_Form.pdf',
      size: '1.2 MB',
      date: 'Oct 14, 2025',
    },
    {
      name: 'Dr_Jenkins_Referral_Doc.pdf',
      size: '420 KB',
      date: 'Jul 01, 2026',
    },
    {
      name: 'Medication_List_Updated.pdf',
      size: '180 KB',
      date: 'Jul 15, 2026',
    },
  ]

  return (
    <div className='bg-white rounded-xl border border-slate-200/90 p-3 w-full flex flex-col justify-between space-y-2.5 shadow-xs'>
      <span className='text-[7px] font-black text-slate-900 uppercase tracking-wider font-mono shrink-0'>
        Clinical Documentation
      </span>
      <div className='flex-grow space-y-1.5 overflow-y-auto pr-0.5'>
        {documents.map((doc, i) => (
          <div
            key={i}
            className='p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center hover:bg-slate-100/50 transition-all cursor-pointer'
          >
            <div className='flex items-center gap-2'>
              <span className='text-[12px]'>📄</span>
              <div>
                <h4 className='text-[8px] font-bold text-slate-900 truncate max-w-[140px]'>
                  {doc.name}
                </h4>
                <p className='text-[6.5px] text-slate-400'>
                  {doc.size} • {doc.date}
                </p>
              </div>
            </div>
            <span className='text-[7px] text-indigo-600 font-extrabold hover:underline'>
              Download
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}