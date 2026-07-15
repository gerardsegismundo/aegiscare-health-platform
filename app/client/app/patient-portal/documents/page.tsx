'use client'

export default function DocumentsPage() {
  const documents = [
    {
      title: 'Care Plan - Lumbar Physical Therapy.pdf',
      size: '1.4 MB',
      uploaded: 'Jul 12, 2026',
      category: 'Physical Therapy',
    },
    {
      title: 'HIPAA Patient Disclosure Form.pdf',
      size: '320 KB',
      uploaded: 'Jan 10, 2026',
      category: 'Legal / Compliance',
    },
    {
      title: 'Active Prescription Certificate.pdf',
      size: '480 KB',
      uploaded: 'Jun 15, 2026',
      category: 'Prescriptions',
    },
  ]

  return (
    <div className='p-6 md:p-8 max-w-5xl mx-auto space-y-6'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200'>
        <div>
          <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
            Secure Documents
          </h1>
          <p className='text-slate-500 text-xs mt-1'>
            Review, organize, and securely download your clinical documents.
          </p>
        </div>
        <button className='rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2.5 text-xs font-bold text-slate-700 transition-all shadow-sm'>
          ↑ Upload External File
        </button>
      </div>

      <div className='grid gap-4 sm:grid-cols-2'>
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className='bg-white rounded-2xl border border-slate-200 p-5 flex items-start justify-between shadow-sm hover:shadow-md transition-all'
          >
            <div className='space-y-1.5 min-w-0'>
              <span className='text-[9px] font-bold uppercase tracking-wider text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded-md'>
                {doc.category}
              </span>
              <h4
                className='text-xs font-bold text-slate-900 truncate pr-2'
                title={doc.title}
              >
                {doc.title}
              </h4>
              <p className='text-[10px] text-slate-400 font-mono'>
                {doc.size} • Uploaded {doc.uploaded}
              </p>
            </div>
            <button
              className='rounded-xl border border-slate-200 hover:bg-slate-50 p-2 text-sm text-slate-600 shadow-sm transition-all'
              title='Download Document'
            >
              ⬇️
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
