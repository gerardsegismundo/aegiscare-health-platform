'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '../../components/Footer'

const WHITEPAPER_SECTIONS = [
  {
    id: 'encryption',
    title: '1. Cryptographic Safeguards',
    subTitle: 'At-Rest & In-Transit Schemes',
    content: `All patient PII (Personally Identifiable Information) and clinical telemetry data are protected using cryptographic protocols modeled on federal standards:

    • Data At Rest: Secured via AES-256 encryption. We leverage AWS KMS (Key Management Service) with customer-managed keys (CMKs) to enforce strict cryptographic separation of data. Envelope encryption is applied per patient record to isolate breach blasts.
    • Data In Transit: Transport Layer Security (TLS) 1.3 is strictly enforced on all public routing endpoints. Weak cipher suites and deprecated TLS protocols (1.0, 1.1, 1.2) are blocked at the Application Load Balancer layer.`,
  },
  {
    id: 'identity',
    title: '2. Identity & Access Management',
    subTitle: 'Zero-Trust Authentication Engine',
    content: `Authentication and authorization pathways are designed using Zero-Trust principles to prevent privilege escalation:

    • Identity Provider: Handled using Amazon Cognito User Pools integrated with Multi-Factor Authentication (MFA).
    • Authorization Tokens: Uses short-lived, cryptographically signed JSON Web Tokens (JWTs). Tokens are transmitted via secure, httpOnly, sameSite cookies to protect against Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).
    • Edge Protection: Next.js edge middleware parses and validates token signatures before matching requested routes to private subnets.`,
  },
  {
    id: 'network',
    title: '3. Network Security & Architecture',
    subTitle: 'VPC Subnet & Threat Isolation',
    content: `Our network topography is engineered inside an isolated Amazon VPC to prevent lateral movement of malicious traffic:

    • Public Facing Layer: Only the Application Load Balancer (ALB) and public subnets are exposed to public traffic. Static frontend assets are securely distributed globally via Amazon CloudFront.
    • Application Layer: The Next.js application runtime is deployed inside private VPC subnets. These instances have no direct route to the open internet and communicate externally only via NAT Gateways.
    • Database Layer: Amazon RDS and DynamoDB instances reside in isolated database subnets, restricted by security groups that only permit access from the application layer.`,
  },
  {
    id: 'compliance',
    title: '4. Audit & Compliance Protocols',
    subTitle: 'Continuous Logging for HIPAA & SOC2',
    content: `To ensure regulatory compliance with HIPAA's audit control specifications, we have configured a comprehensive audit trail:

    • CloudTrail Logging: Every API write operation, IAM policy alteration, and KMS key access is recorded in a write-once AWS CloudTrail log.
    • Log Integrity: Audit logs are stored in a secure Amazon S3 bucket with S3 Object Lock enabled in Compliance Mode, preventing deletion or alteration of logs—even by root accounts.
    • Continuous Monitoring: Real-time system vitals are monitored via AWS CloudWatch, triggering automated PagerDuty or Slack alerts if unexpected behavior is detected.`,
  },
]

export default function SecurityWhitepaper() {
  const [activeSection, setActiveSection] = useState('encryption')

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
            className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'
          >
            Learn More
          </Link>
          <Link
            href='/security-whitepaper'
            className='text-xs font-bold text-indigo-600 transition-colors'
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
      <main className='w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 z-10 relative py-12'>
        {/* LEFT COLUMN: Table of Contents & Compliance Overview */}
        <div className='flex flex-col lg:w-[35%] shrink-0 space-y-6 max-w-sm justify-between'>
          <div className='space-y-5'>
            {/* Compliance Stamp */}
            <div className='inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1 self-start'>
              <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />
              <span className='text-[9px] font-black text-emerald-700 tracking-widest uppercase font-mono'>
                Audit Readiness Verified
              </span>
            </div>

            <h1 className='text-3xl font-black tracking-tight text-slate-900 leading-tight'>
              Platform <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500'>
                Security Controls.
              </span>
            </h1>

            <p className='text-slate-500 text-xs sm:text-sm leading-relaxed font-medium'>
              Interactive technical documentation outlines AegisCare's
              compliance alignment with HIPAA regulations and SOC2 security
              frameworks.
            </p>

            {/* Interactive Index Link List */}
            <nav className='pt-4 space-y-2.5 border-t border-slate-200/60'>
              <div className='text-[10px] font-black tracking-wider text-slate-400 uppercase font-mono mb-2'>
                Whitepaper Index
              </div>
              {WHITEPAPER_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id)}
                  className={`w-full text-left text-xs font-bold transition-all flex items-center justify-between ${
                    activeSection === sec.id
                      ? 'text-indigo-600 translate-x-1.5'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>{sec.title}</span>
                  {activeSection === sec.id && (
                    <span className='text-indigo-600'>→</span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Quick Technical Specs Highlight */}
          <div className='hidden lg:block bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 shadow-md font-mono text-[9px] space-y-2'>
            <div className='text-indigo-400 font-bold uppercase tracking-wider text-[8px]'>
              PLATFORM CRYPTO SPECS
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-400'>Transport Enc:</span>
              <span>TLS 1.3 Strict</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-400'>Database Cipher:</span>
              <span>AES-256 Envelope</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-400'>Key Custody:</span>
              <span>AWS KMS CMK</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Document Viewer */}
        <div className='flex-grow w-full lg:w-[65%] flex flex-col'>
          <div className='bg-white border border-slate-200/90 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03),0_10px_20px_-10px_rgba(0,0,0,0.02)] p-6 sm:p-8 flex-grow flex flex-col justify-between min-h-[420px]'>
            {/* Header Area */}
            <div>
              <div className='flex items-center justify-between gap-4 border-b border-slate-100 pb-5'>
                <div>
                  <span className='text-[8.5px] font-mono tracking-widest text-indigo-600 uppercase font-black'>
                    {
                      WHITEPAPER_SECTIONS.find((s) => s.id === activeSection)
                        ?.subTitle
                    }
                  </span>
                  <h2 className='text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-1'>
                    {
                      WHITEPAPER_SECTIONS.find((s) => s.id === activeSection)
                        ?.title
                    }
                  </h2>
                </div>
                <div className='text-slate-400 select-none hidden sm:block'>
                  🛡️ Sec Ops Doc-04
                </div>
              </div>

              {/* Dynamic Content Panel */}
              <div className='py-6 font-medium text-[11.5px] sm:text-xs text-slate-500 leading-relaxed whitespace-pre-line'>
                {
                  WHITEPAPER_SECTIONS.find((s) => s.id === activeSection)
                    ?.content
                }
              </div>
            </div>

            {/* Compliance Guarantee Footer inside Card */}
            <div className='border-t border-slate-100 pt-5 mt-6 flex flex-col sm:flex-row sm:items-center justify-between text-[9.5px] text-slate-400 font-mono tracking-wide gap-3'>
              <div className='flex items-center gap-1.5'>
                <span className='w-1.5 h-1.5 rounded-full bg-emerald-500' />
                HIPAA Administrative & Technical Safeguards Aligned.
              </div>
              <Link
                href='/explore-platform'
                className='text-indigo-600 font-bold hover:underline shrink-0'
              >
                Inspect IaC Deployment Codes →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
