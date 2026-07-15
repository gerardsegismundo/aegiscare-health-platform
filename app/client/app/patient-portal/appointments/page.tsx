// app/patient-portal/appointments/page.jsx
export default function AppointmentsPage() {
  return (
    <div className='p-6 md:p-8 max-w-5xl mx-auto space-y-6'>
      <div className='pb-6 border-b border-slate-200'>
        <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
          Appointments
        </h1>
        <p className='text-slate-500 text-xs mt-1'>
          Book, cancel, or modify your current visits.
        </p>
      </div>
      <div className='border border-dashed border-slate-200 rounded-[2rem] p-12 text-center text-slate-400 text-sm'>
        Appointment scheduler logic goes here...
      </div>
    </div>
  )
}
