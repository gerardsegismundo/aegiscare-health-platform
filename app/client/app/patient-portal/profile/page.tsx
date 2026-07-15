'use client'

import { useState } from 'react'

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '(555) 019-2834',
    address: '102 Medical Park Center',
    city: 'Seattle',
    zip: '98101',
  })

  const [saved, setSaved] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className='p-6 md:p-8 max-w-2xl mx-auto space-y-6'>
      <div className='pb-6 border-b border-slate-200'>
        <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
          Your Patient Profile
        </h1>
        <p className='text-slate-500 text-xs mt-1'>
          Keep your contact and clinic identification metrics up to date.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='bg-white border border-slate-200 rounded-[2rem] p-6 sm:p-8 shadow-sm space-y-5'
      >
        <div className='grid gap-4 sm:grid-cols-2'>
          <div>
            <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
              First Name
            </label>
            <input
              type='text'
              value={profile.firstName}
              onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
              className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs focus:border-indigo-500/50 focus:bg-white focus:outline-none'
            />
          </div>
          <div>
            <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
              Last Name
            </label>
            <input
              type='text'
              value={profile.lastName}
              onChange={(e) =>
                setProfile({ ...profile, lastName: e.target.value })
              }
              className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs focus:border-indigo-500/50 focus:bg-white focus:outline-none'
            />
          </div>
        </div>

        <div>
          <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
            Phone Number
          </label>
          <input
            type='text'
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs focus:border-indigo-500/50 focus:bg-white focus:outline-none'
          />
        </div>

        <div>
          <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
            Mailing Address
          </label>
          <input
            type='text'
            value={profile.address}
            onChange={(e) =>
              setProfile({ ...profile, address: e.target.value })
            }
            className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs focus:border-indigo-500/50 focus:bg-white focus:outline-none'
          />
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          <div>
            <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
              City
            </label>
            <input
              type='text'
              value={profile.city}
              onChange={(e) => setProfile({ ...profile, city: e.target.value })}
              className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs focus:border-indigo-500/50 focus:bg-white focus:outline-none'
            />
          </div>
          <div>
            <label className='block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1.5'>
              Zip Code
            </label>
            <input
              type='text'
              value={profile.zip}
              onChange={(e) => setProfile({ ...profile, zip: e.target.value })}
              className='w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs focus:border-indigo-500/50 focus:bg-white focus:outline-none'
            />
          </div>
        </div>

        <div className='pt-2 flex items-center justify-between gap-4'>
          <button
            type='submit'
            className='rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 text-xs font-bold transition-all shadow-md'
          >
            Save Demographic Updates
          </button>
          {saved && (
            <span className='text-emerald-600 font-bold text-xs'>
              ✓ Changes successfully updated!
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
