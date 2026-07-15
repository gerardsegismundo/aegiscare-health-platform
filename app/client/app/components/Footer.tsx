// components/Footer.jsx
export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-slate-100 py-8 text-center text-xs text-slate-500 shrink-0'>
      <div className='mx-auto max-w-[1400px] px-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <p className='font-semibold text-slate-400 font-mono tracking-widest uppercase'>
          AEGISCARE GATEWAY SECURED
        </p>
        <p>
          © {new Date().getFullYear()} AegisCare. All systems audited under
          strict cloud protocol.
        </p>
      </div>
    </footer>
  )
}
