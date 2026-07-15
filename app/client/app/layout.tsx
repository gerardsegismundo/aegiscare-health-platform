import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AegisCare Healthcare Portal',
  description: 'HIPAA-oriented healthcare portal MVP',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      {/* Make sure there's no "h-screen" or "overflow-y-scroll" here */}
      <body className='min-h-screen bg-slate-50 antialiased'>{children}</body>
    </html>
  )
}
