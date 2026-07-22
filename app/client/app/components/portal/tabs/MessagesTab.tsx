import { useState, FormEvent } from 'react'
import { Message } from '@/types/aegis'

export default function MessagesTab() {
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'doctor',
      text: 'Hi Taena, how is your blood pressure trending after the adjustment?',
      time: '10:14 AM',
    },
    {
      sender: 'patient',
      text: 'It has stabilized around 118 systolic! Feeling much better.',
      time: '10:20 AM',
    },
  ])

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return
    setMessages((prev) => [
      ...prev,
      { sender: 'patient', text: messageInput, time: 'Just Now' },
    ])
    setMessageInput('')
  }

  return (
    <div className='bg-white rounded-xl border border-slate-200/90 p-2.5 flex flex-col justify-between w-full min-h-0 overflow-hidden shadow-xs'>
      <div className='flex-grow overflow-y-auto space-y-2 pr-1 pb-1.5 flex flex-col justify-end'>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col max-w-[85%] ${
              msg.sender === 'patient' ? 'self-end items-end' : 'self-start'
            }`}
          >
            <div
              className={`px-3 py-2 rounded-2xl text-[8.5px] leading-relaxed font-semibold shadow-xs ${
                msg.sender === 'patient'
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-slate-100 text-slate-800 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
            <span className='text-[6px] text-slate-400 mt-1 px-1 font-mono'>{msg.time}</span>
          </div>
        ))}

        {/* Simulated Live Doctor Typing Indicator */}
        <div className='self-start flex gap-1.5 items-center bg-slate-100/60 rounded-full px-2.5 py-1 text-[7.5px] text-slate-400 font-bold'>
          <span className='flex gap-0.5'>
            <span className='w-1 h-1 bg-slate-400 rounded-full animate-bounce' style={{ animationDelay: '0ms' }} />
            <span className='w-1 h-1 bg-slate-400 rounded-full animate-bounce' style={{ animationDelay: '150ms' }} />
            <span className='w-1 h-1 bg-slate-400 rounded-full animate-bounce' style={{ animationDelay: '300ms' }} />
          </span>
          Dr. Jenkins typing...
        </div>
      </div>

      <form onSubmit={handleSendMessage} className='border-t border-slate-200/60 pt-2.5 flex items-center gap-2 shrink-0'>
        <input
          type='text'
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder='Type secure response...'
          className='flex-grow bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 text-[8.5px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20'
        />
        <button type='submit' className='bg-indigo-600 hover:bg-indigo-700 text-white h-6 px-2.5 rounded-lg flex items-center justify-center text-[9px] font-black transition-all'>
          Send
        </button>
      </form>
    </div>
  )
}