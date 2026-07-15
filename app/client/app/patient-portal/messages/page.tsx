'use client'

import { useState } from 'react'

export default function MessagesPage() {
  const [messages, setMessages] = useState([
    {
      sender: 'Dr. Sarah Jenkins',
      role: 'Doctor',
      body: "Hi John, I've cleared your metabolic lab panels. Everything looks fantastic.",
      time: '10:15 AM',
    },
    {
      sender: 'John Doe',
      role: 'Patient',
      body: 'Thank you Dr. Jenkins! Do I need to follow up again in six months?',
      time: '10:18 AM',
    },
    {
      sender: 'Dr. Sarah Jenkins',
      role: 'Doctor',
      body: 'Yes, our routine winter follow-up is optimal. I will send over the booking link.',
      time: '10:22 AM',
    },
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newMessage.trim()) return
    setMessages([
      ...messages,
      {
        sender: 'John Doe',
        role: 'Patient',
        body: newMessage,
        time: 'Just Now',
      },
    ])
    setNewMessage('')
  }

  return (
    <div className='p-6 md:p-8 max-w-3xl mx-auto space-y-6 flex flex-col h-[calc(100vh-20px)]'>
      <div className='pb-4 border-b border-slate-200 shrink-0'>
        <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
          Direct Messaging
        </h1>
        <p className='text-slate-500 text-xs mt-1'>
          End-to-end encrypted messaging channel with your direct Care Team.
        </p>
      </div>

      {/* Messaging Panel */}
      <div className='flex-grow bg-white border border-slate-200 rounded-[2rem] overflow-hidden flex flex-col shadow-sm'>
        {/* Recipient Details */}
        <div className='bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-3 shrink-0'>
          <div className='w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse' />
          <span className='text-xs font-bold text-slate-800'>
            Direct Chat: Dr. Sarah Jenkins (PCP)
          </span>
        </div>

        {/* Message Bubble Thread */}
        <div className='flex-grow p-6 overflow-y-auto space-y-4'>
          {messages.map((msg, idx) => {
            const isPatient = msg.role === 'Patient'
            return (
              <div
                key={idx}
                className={`flex ${isPatient ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md rounded-2xl p-4 text-xs ${
                    isPatient
                      ? 'bg-indigo-600 text-white rounded-br-none shadow-sm'
                      : 'bg-slate-100 text-slate-900 rounded-bl-none border border-slate-1.5'
                  }`}
                >
                  <p className='font-bold mb-1 opacity-90'>{msg.sender}</p>
                  <p className='leading-relaxed'>{msg.body}</p>
                  <p className='text-[9px] mt-1.5 opacity-60 text-right'>
                    {msg.time}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Action input */}
        <form
          onSubmit={handleSend}
          className='p-4 border-t border-slate-200 bg-slate-55 flex gap-2 shrink-0'
        >
          <input
            type='text'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Type your secure message here...'
            className='flex-grow rounded-xl border border-slate-200 px-4 py-2.5 text-xs focus:border-indigo-500 focus:outline-none bg-white'
          />
          <button
            type='submit'
            className='rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-5 text-xs font-bold transition-all'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
