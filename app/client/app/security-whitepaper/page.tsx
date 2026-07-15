'use client'

import Link from 'next/link'
import Footer from '@/components/Footer'

export default function SecurityWhitepaperPage() {
  const complianceMatrix = [
    {
      safeguard: 'Access Control (164.312.a.1)',
      requirement:
        'Unique user identification, multi-factor authorization, and emergency access procedures.',
      implementation:
        'MFA-enforced WebAuthn passkey authentication, role-isolated containerized workspaces, and automated 15-minute idle-session termination.',
    },
    {
      safeguard: 'Transmission Security (164.312.e.1)',
      requirement: 'Guard against unauthorized access to PHI in transit.',
      implementation:
        'Enforced TLS 1.3 encryption with Perfect Forward Secrecy. Point-to-point zero-trust database routing with end-to-end encryption (E2EE).',
    },
    {
      safeguard: 'Audit Controls (164.312.b)',
      requirement:
        'Record and examine system activity containing or using PHI.',
      implementation:
        'Tamper-proof, cryptographically signed ledger logging of every database handshake, read, write, and API call.',
    },
    {
      safeguard: 'Integrity Controls (164.312.c.1)',
      requirement: 'Protect PHI from improper alteration or destruction.',
      implementation:
        'Database write hashing utilizing cryptographic integrity checks to immediately detect and flag unauthorized mutations.',
    },
  ]

  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500/10 selection:text-cyan-900 overflow-x-hidden relative flex flex-col justify-between'>
      {/* Ambient Cleanroom Glows */}
      <div className='absolute top-[-10%] left-[-20%] -z-10 h-[1000px] w-[1000px] rounded-full bg-indigo-500/5 blur-[220px] pointer-events-none' />
      <div className='absolute bottom-[-10%] right-[-10%] -z-10 h-[1000px] w-[1000px] rounded-full bg-cyan-500/5 blur-[220px] pointer-events-none' />

      {/* Header */}
      <header className='w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50'>
        <div className='mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5'>
          <Link
            href='/'
            className='flex items-center gap-3 text-2xl font-black tracking-tight text-slate-900 hover:opacity-90 transition-opacity'
          >
            <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/5'>
              <span className='flex h-full w-full items-center justify-center rounded-[10px] bg-white text-sm font-bold text-cyan-600'>
                Æ
              </span>
            </div>
            AegisCare
          </Link>

          <div className='flex items-center gap-4'>
            <Link
              href='/'
              className='text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors'
            >
              Back to Home
            </Link>
            <Link
              href='/login'
              className='rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-500/10 hover:shadow-cyan-500/20 hover:brightness-105 transition-all hover:scale-[1.01]'
            >
              Access Gateway
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <article className='mx-auto w-full max-w-[1000px] px-8 py-16 md:py-24 flex-grow space-y-12'>
        {/* Document Metadata Header */}
        <div className='border-b border-slate-250 pb-8 space-y-4'>
          <div className='flex items-center gap-2'>
            <span className='rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-widest'>
              Technical Whitepaper
            </span>
            <span className='text-xs text-slate-400'>•</span>
            <span className='text-xs font-mono text-slate-400'>
              VERSION 4.2 — JULY 2026
            </span>
          </div>
          <h1 className='text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl'>
            AegisCare Security & Compliance Architecture
          </h1>
          <p className='text-lg text-slate-500 leading-relaxed'>
            An in-depth guide to cryptographic isolation, PHI-handling
            pipelines, and HIPAA-compliant database topologies on the AegisCare
            framework.
          </p>
        </div>

        {/* Executive Summary */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-bold text-slate-900 tracking-tight'>
            1. Executive Summary
          </h2>
          <p className='text-slate-600 leading-relaxed'>
            In modern healthcare, database security can no longer rely on
            traditional network firewalls. AegisCare operates on a strict
            **Zero-Trust Network Architecture (ZTNA)**. Every connection, query,
            and user handshake is treated as hostile until authenticated,
            encrypted, and structurally validated. By containerizing workloads
            and enforcing encryption end-to-end, AegisCare eliminates lateral
            threat movement.
          </p>
        </section>

        {/* Encryption Standards & Cryptographic Keys */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-bold text-slate-900 tracking-tight'>
            2. Cryptographic Controls
          </h2>
          <p className='text-slate-600 leading-relaxed'>
            Data is guarded using state-of-the-art symmetric and asymmetric
            cryptographic systems. Keys are isolated in hardware security
            modules (HSMs) and rotated automatically.
          </p>

          <div className='grid gap-6 sm:grid-cols-2 pt-4'>
            <div className='p-6 rounded-2xl bg-white border border-slate-200 shadow-sm'>
              <h4 className='font-bold text-slate-900'>
                Data in Transit (TLS 1.3)
              </h4>
              <p className='text-slate-500 text-xs mt-2 leading-relaxed'>
                All external and internal network requests are wrapped in TLS
                1.3 tunnels. Cipher suites are strictly limited to
                zero-round-trip-time (0-RTT) configurations utilizing ECDHE for
                perfect forward secrecy.
              </p>
            </div>
            <div className='p-6 rounded-2xl bg-white border border-slate-200 shadow-sm'>
              <h4 className='font-bold text-slate-900'>
                Data at Rest (AES-256-GCM)
              </h4>
              <p className='text-slate-500 text-xs mt-2 leading-relaxed'>
                Patient records and system databases are encrypted at the block
                storage layer. Each unique customer schema uses its own isolated
                master key managed by AWS KMS with envelope encryption
                protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Sequence: Patient Query Routing */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-bold text-slate-900 tracking-tight'>
            3. Zero-Trust Patient Query Routing
          </h2>
          <p className='text-slate-600 leading-relaxed'>
            When a provider requests an encrypted medical file, the data
            traverses a multi-layered verification process. The diagram below
            illustrates the deterministic, critical steps involved:
          </p>

          {/* Procedural Step Component */}
          <div className='border border-slate-200 rounded-[2rem] bg-white p-8 shadow-sm'>
            <div className='space-y-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-100'>
              <div className='relative pl-10'>
                <div className='absolute left-1.5 top-1.5 h-5 w-5 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center text-[10px] text-white font-bold shadow' />
                <h4 className='text-sm font-bold text-slate-900 font-mono uppercase tracking-wider'>
                  Step 1: Mutual Authentication Handshake
                </h4>
                <p className='text-slate-500 text-xs mt-1 leading-relaxed'>
                  The clinician's browser establishes a secure session via TLS
                  1.3 using a hardware-bound WebAuthn security key (Passkey),
                  registering their active biometric state.
                </p>
              </div>

              <div className='relative pl-10'>
                <div className='absolute left-1.5 top-1.5 h-5 w-5 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center text-[10px] text-white font-bold shadow' />
                <h4 className='text-sm font-bold text-slate-900 font-mono uppercase tracking-wider'>
                  Step 2: Micro-Segmentation Route
                </h4>
                <p className='text-slate-500 text-xs mt-1 leading-relaxed'>
                  The API gateway recognizes the clinician's role and maps their
                  routing payload directly to an isolated, containerized
                  serverless database instance. At no point can they access
                  neighboring data silos.
                </p>
              </div>

              <div className='relative pl-10'>
                <div className='absolute left-1.5 top-1.5 h-5 w-5 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center text-[10px] text-white font-bold shadow' />
                <h4 className='text-sm font-bold text-slate-900 font-mono uppercase tracking-wider'>
                  Step 3: Envelope Key Decryption
                </h4>
                <p className='text-slate-500 text-xs mt-1 leading-relaxed'>
                  A transient database key is queried from the HSM, decrypting
                  the requested patient record block in volatile RAM. The raw,
                  plaintext record is never written to a disk swap space.
                </p>
              </div>

              <div className='relative pl-10'>
                <div className='absolute left-1.5 top-1.5 h-5 w-5 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center text-[10px] text-white font-bold shadow' />
                <h4 className='text-sm font-bold text-slate-900 font-mono uppercase tracking-wider'>
                  Step 4: Tamper-Proof Audit Logging
                </h4>
                <p className='text-slate-500 text-xs mt-1 leading-relaxed'>
                  Before the record is displayed to the clinician, an encrypted
                  transaction hash containing the query context is written
                  directly to an immutable, append-only security ledger.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HIPAA Compliance Matrix */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-bold text-slate-900 tracking-tight'>
            4. HIPAA Compliance Mapping
          </h2>
          <p className='text-slate-600 leading-relaxed'>
            The AegisCare core framework directly maps to the physical,
            administrative, and technical safeguards detailed under the **HIPAA
            Security Rule**.
          </p>

          <div className='overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm mt-6'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-slate-50 border-b border-slate-200'>
                  <th className='px-6 py-4 text-xs font-bold font-mono tracking-wider text-slate-400 uppercase'>
                    HIPAA Safeguard
                  </th>
                  <th className='px-6 py-4 text-xs font-bold font-mono tracking-wider text-slate-400 uppercase'>
                    Requirement
                  </th>
                  <th className='px-6 py-4 text-xs font-bold font-mono tracking-wider text-slate-400 uppercase'>
                    AegisCare Architecture Implementation
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100 text-xs'>
                {complianceMatrix.map((item, idx) => (
                  <tr
                    key={idx}
                    className='hover:bg-slate-50/50 transition-colors'
                  >
                    <td className='px-6 py-4 font-bold text-slate-900 align-top whitespace-nowrap'>
                      {item.safeguard}
                    </td>
                    <td className='px-6 py-4 text-slate-500 align-top max-w-[250px] leading-relaxed'>
                      {item.requirement}
                    </td>
                    <td className='px-6 py-4 text-slate-700 font-medium align-top leading-relaxed'>
                      {item.implementation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Audit Verification */}
        <section className='p-6 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
          <div>
            <h4 className='text-sm font-extrabold text-slate-900'>
              Request External Audit Artifacts
            </h4>
            <p className='text-slate-500 text-xs mt-1'>
              Our SOC 2 Type II report and third-party penetration test
              certifications are available under Non-Disclosure Agreements
              (NDA).
            </p>
          </div>
          <button className='rounded-xl bg-slate-900 text-white font-bold text-xs px-5 py-3 hover:bg-slate-800 transition-colors shrink-0'>
            Contact Compliance Officer
          </button>
        </section>
      </article>

      <Footer />
    </div>
  )
}
