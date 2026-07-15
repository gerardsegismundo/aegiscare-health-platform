// app/patient-portal/documents/page.jsx
export default function DocumentsPage() {
  return (
    <div className='p-6 md:p-8 max-w-5xl mx-auto space-y-6'>
      <div className='pb-6 border-b border-slate-200'>
        <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
          Documents
        </h1>
        <p className='text-slate-500 text-xs mt-1'>
          Upload, organize, and share your health documents securely.
        </p>
      </div>
      <div className='border border-dashed border-slate-200 rounded-[2rem] p-12 text-center text-slate-400 text-sm'>
        Document management logic goes here...
      </div>
    </div>
  )
}
