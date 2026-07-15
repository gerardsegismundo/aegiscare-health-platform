'use client'

import { useState } from 'react'

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Jenkins, MD',
      specialty: 'Primary Care Physician',
      date: 'Jul 24, 2026',
      time: '09:30 AM (PDT)',
      type: 'Telehealth Video Consultation',
      status: 'Confirmed',
    },
    {
      id: 2,
      doctor: 'Marcus Aurelius, DPT',
      specialty: 'Physical Therapist',
      date: 'Aug 02, 2026',
      time: '02:00 PM (PDT)',
      type: 'In-Office Session',
      status: 'Confirmed',
    },
  ])

  return (
    <div className='p-6 md:p-8 max-w-5xl mx-auto space-y-6'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200'>
        <div>
          <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
            Your Scheduled Appointments
          </h1>
          <p className='text-slate-500 text-xs mt-1'>
            Book, cancel, or change upcoming slots with your Care Team.
          </p>
        </div>
        <button className='rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-md shadow-indigo-500/10 self-start sm:self-auto'>
          + Book Consultation
        </button>
      </div>

      <div className='space-y-4'>
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className='rounded-2xl border border-slate-200 bg-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all'
          >
            <div className='flex gap-4 items-start'>
              <div className='h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 flex flex-col items-center justify-center text-indigo-600 font-bold shrink-0 text-xs'>
                🏥
              </div>
              <div>
                <h4 className='text-sm font-bold text-slate-900'>
                  {appt.doctor}
                </h4>
                <p className='text-xs text-slate-400 mt-0.5'>
                  {appt.specialty} • {appt.type}
                </p>
                <div className='flex items-center gap-2 mt-2'>
                  <span className='text-xs font-semibold text-slate-600'>
                    🕒 {appt.date} at {appt.time}
                  </span>
                  <span className='text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700'>
                    {appt.status}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <button className='rounded-xl border border-slate-200 hover:bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600 transition-all'>
                Cancel
              </button>
              <button className='rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 text-xs font-bold transition-all'>
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
