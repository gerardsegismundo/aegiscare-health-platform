'use client'

import { useState } from 'react'
import Link from 'next/link'

// Highly technical Q&A tailored for a cloud engineering portfolio
const SYSTEM_DESIGN_FAQS = [
  {
    id: 'database-choice',
    question:
      'Why choose Amazon DynamoDB over PostgreSQL for patient telemetry?',
    answer:
      'Patient vitals generate high-frequency, write-heavy workloads. A relational database like PostgreSQL would require complex indexing and auto-vacuuming overhead to keep up. DynamoDB handles horizontal scale natively. By using a single-table design with Partition Key "PATIENT#ID" and Sort Key "VITAL#TIMESTAMP", we achieve O(1) write performance and keep query latency ultra-low. We then use TTL (Time-to-Live) to automatically prune telemetry older than 90 days, moving cold logs directly to Amazon S3 for long-term archiving.',
  },
  {
    id: 'encryption-keys',
    question:
      'How does envelope encryption work with AWS KMS in this architecture?',
    answer:
      'To comply with HIPAA guidelines, we do not encrypt patient records using a single master key. Instead, we use AWS KMS to generate a unique Data Encryption Key (DEK) for each patient record (envelope encryption). The system encrypts the plaintext payload with the unique DEK, then stores the encrypted payload and the KMS-encrypted DEK together in the database. When a doctor requests a record, the application decrypts the DEK using the KMS Customer Master Key (CMK), and then decrypts the payload. KMS key policies strictly restrict this decryption privilege to our active backend runtime.',
  },
  {
    id: 'real-time-streaming',
    question:
      'How do you handle real-time streaming without killing server resources?',
    answer:
      'We avoid HTTP long-polling entirely. Instead, our platform implements AWS API Gateway WebSocket APIs. This offloads the connection state management from our core compute cluster to the AWS managed edge. The application server is only invoked (via AWS Lambda) when a client actually sends a payload or when a new visual event needs to be pushed down to the UI. This drastically reduces computing costs and keeps our server layer lightweight.',
  },
  {
    id: 'infrastructure-as-code',
    question:
      'What is your strategy for provisioning and continuous deployment?',
    answer:
      'The entire infrastructure is defined as code using Terraform, ensuring consistent environments between staging and production. Our CI/CD pipeline runs automated vulnerability scanning on Docker containers (using AWS ECR / Trivy) before deploying rolling updates to Amazon ECS (Fargate). This guarantees that zero-downtime deployments happen only after passing all health-check checks.',
  },
]

export default function LearnMore() {
  const [openSection, setOpenSection] = useState('database-choice')

  return (
    <div className='min-h-screen w-screen bg-slate-50 text-slate-800 flex flex-col justify-between overflow-x-hidden relative selection:bg-indigo-100 selection:text-indigo-900'>
      {/* SAFE BACKGROUND BLURS */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
        <div className='absolute top-[-10%] left-[-10%] h-[500px] w-[500px] bg-indigo-200/20 blur-[130px] rounded-full' />
        <div className='absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] bg-cyan-200/25 blur-[150px] rounded-full' />
      </div>

      {/* HEADER / NAVIGATION BAR */}
      <header className='w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between z-20 relative shrink-0'>
        <Link
          href='/'
          className='flex items-center gap-3 text-lg font-black tracking-tight text-slate-900'
        >
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-400 via-indigo-500 to-indigo-600 p-[1px] shadow-sm'>
            <span className='flex h-full w-full items-center justify-center rounded-[7px] bg-white text-xs font-black text-indigo-600'>
              Æ
            </span>
          </div>
          AegisCare
        </Link>

        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='/explore-platform'
            className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'
          >
            Explore Platform
          </Link>
          <Link
            href='/learn-more'
            className='text-xs font-bold text-indigo-600 transition-colors'
          >
            Learn More
          </Link>
          <Link
            href='/security-whitepaper'
            className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'
          >
            Security Whitepaper
          </Link>
        </nav>

        <Link
          href='/login'
          className='rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2 text-xs font-black text-slate-700 shadow-sm transition-all'
        >
          Portal Login
        </Link>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className='w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10 relative py-12'>
        {/* LEFT PANEL: Context & Stats */}
        <div className='flex flex-col justify-center lg:w-[40%] shrink-0 space-y-6 max-w-xl'>
          <div className='space-y-4'>
            {/* Engineering Specs Badge */}
            <div className='inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1 self-start'>
              <span className='w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse' />
              <span className='text-[9px] font-black text-cyan-700 tracking-widest uppercase font-mono'>
                System Topologies
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight'>
              Engineered for <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500'>
                scale, security, & speed.
              </span>
            </h1>

            <p className='text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md font-medium'>
              Review the concrete engineering decisions behind AegisCare’s
              distributed infrastructure. We prioritize strong isolation, fast
              execution at the edge, and absolute compliance.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className='grid grid-cols-2 gap-4 max-w-md pt-2'>
            <div className='p-4 bg-white border border-slate-200/60 rounded-2xl shadow-sm'>
              <div className='text-2xl font-black text-indigo-600 font-mono'>
                &lt;50ms
              </div>
              <div className='text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1'>
                API Endpoint Latency
              </div>
            </div>
            <div className='p-4 bg-white border border-slate-200/60 rounded-2xl shadow-sm'>
              <div className='text-2xl font-black text-cyan-500 font-mono'>
                99.99%
              </div>
              <div className='text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1'>
                Design Availability
              </div>
            </div>
          </div>

          {/* Call to Action to view source code */}
          <div className='pt-2'>
            <Link
              href='/explore-platform'
              className='inline-flex items-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 text-xs font-black transition-all shadow-md'
            >
              ⌨️ View Infrastructure Architecture
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL: Interactive Engineering QA */}
        <div className='flex-grow w-full lg:w-[60%] flex flex-col space-y-4'>
          <h2 className='text-xs font-black uppercase tracking-wider text-slate-400 font-mono'>
            Technical Design Q&A
          </h2>

          <div className='space-y-3.5'>
            {SYSTEM_DESIGN_FAQS.map((faq) => {
              const isOpen = openSection === faq.id
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl bg-white transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-indigo-200/80 shadow-[0_12px_30px_-5px_rgba(99,102,241,0.06)]'
                      : 'border-slate-200/60 shadow-sm hover:border-slate-300'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => setOpenSection(isOpen ? '' : faq.id)}
                    className='w-full text-left px-5 py-4.5 flex items-center justify-between gap-4 select-none'
                  >
                    <span
                      className={`text-[12.5px] font-black tracking-tight transition-colors ${
                        isOpen ? 'text-indigo-600' : 'text-slate-800'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`text-base font-bold text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-45 text-indigo-500' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Accordion Content Panel */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'max-h-[300px] border-t border-slate-50'
                        : 'max-h-0'
                    }`}
                  >
                    <div className='p-5 bg-slate-50/50 text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium font-mono whitespace-pre-line'>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className='w-full max-w-7xl mx-auto px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[9px] text-slate-400 font-mono tracking-wider gap-2 shrink-0'>
        <span>
          © {new Date().getFullYear()} AEGISCARE INC. ALL CLINICAL DATA IS
          SECURELY MANAGED.
        </span>
        <div className='flex gap-4'>
          <Link
            href='/security-whitepaper'
            className='hover:text-slate-700 transition-colors'
          >
            PRIVACY POLICY
          </Link>
          <span>•</span>
          <Link
            href='/learn-more'
            className='hover:text-slate-700 transition-colors'
          >
            TERMS OF SERVICE
          </Link>
          <span>•</span>
          <Link
            href='/support'
            className='hover:text-slate-700 transition-colors'
          >
            CONTACT SUPPORT
          </Link>
        </div>
      </footer>
    </div>
  )
}
