'use client'

export default function MedicalRecordsPage() {
  const labReports = [
    {
      name: 'Comprehensive Metabolic Panel (CMP)',
      date: 'Jul 10, 2026',
      status: 'Normal',
      doctor: 'Dr. Sarah Jenkins',
    },
    {
      name: 'Lipid Panel (Cardio Health)',
      date: 'Jul 10, 2026',
      status: 'Normal',
      doctor: 'Dr. Sarah Jenkins',
    },
    {
      name: 'Hemoglobin A1c (HbA1c)',
      date: 'Jun 02, 2026',
      status: 'Optimal',
      doctor: 'Dr. Sarah Jenkins',
    },
  ]

  return (
    <div className='p-6 md:p-8 max-w-5xl mx-auto space-y-6'>
      <div className='pb-6 border-b border-slate-200'>
        <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
          Verified Medical Records
        </h1>
        <p className='text-slate-500 text-xs mt-1'>
          Directly integrated database feed of approved laboratory diagnostic
          results.
        </p>
      </div>

      <div className='bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='border-b border-slate-200 bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono'>
              <th className='p-4'>Report Name</th>
              <th className='p-4'>Authorized Date</th>
              <th className='p-4'>Physician</th>
              <th className='p-4'>Status</th>
              <th className='p-4 text-right'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-150 text-xs text-slate-600'>
            {labReports.map((report, idx) => (
              <tr key={idx} className='hover:bg-slate-50/50 transition-all'>
                <td className='p-4 font-bold text-slate-950'>{report.name}</td>
                <td className='p-4 font-mono'>{report.date}</td>
                <td className='p-4'>{report.doctor}</td>
                <td className='p-4'>
                  <span className='inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 border border-emerald-200 text-emerald-700'>
                    {report.status}
                  </span>
                </td>
                <td className='p-4 text-right'>
                  <button className='text-indigo-600 hover:text-indigo-800 font-bold'>
                    View Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
