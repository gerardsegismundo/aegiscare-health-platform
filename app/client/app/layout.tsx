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
      <body>{children}</body>
    </html>
  )
}
