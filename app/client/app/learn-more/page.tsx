import Link from 'next/link'
import Footer from '@/components/Footer'

export default function LearnMorePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      {/* Navigation */}
      <nav className='border-b bg-white'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5'>
          <Link href='/' className='text-2xl font-bold text-emerald-700'>
            AegisCare
          </Link>

          <div className='flex items-center gap-4'>
            <Link
              href='/login'
              className='rounded-lg px-4 py-2 hover:bg-slate-100'
            >
              Login
            </Link>

            <Link
              href='/login'
              className='rounded-lg bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700'
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className='mx-auto max-w-7xl px-6 py-20'>
        <div className='mx-auto max-w-3xl'>
          <h1 className='text-4xl font-bold'>Learn More About AegisCare</h1>

          <div className='mt-8 space-y-6 text-lg text-slate-600'>
            <p>
              AegisCare is a comprehensive healthcare management platform designed
              to streamline operations for patients, healthcare providers, and
              administrators. Built with modern cloud architecture, it ensures
              scalability, security, and reliability.
            </p>

            <h2 className='text-2xl font-bold text-slate-900'>
              Our Mission
            </h2>

            <p>
              To empower healthcare organizations with technology that simplifies
              patient management, enhances collaboration, and maintains the
              highest standards of data security and compliance.
            </p>

            <h2 className='text-2xl font-bold text-slate-900'>Key Features</h2>

            <ul className='list-inside list-disc space-y-2'>
              <li>
                <strong>Patient Management</strong> - Centralized patient profiles
                and medical history
              </li>
              <li>
                <strong>Secure Document Handling</strong> - Cloud-ready storage
                with controlled permissions
              </li>
              <li>
                <strong>Role-Based Access</strong> - Dedicated experiences for
                different user types
              </li>
              <li>
                <strong>Appointment Management</strong> - Simplified scheduling
                and tracking
              </li>
              <li>
                <strong>Audit & Activity Tracking</strong> - Comprehensive
                platform action records
              </li>
              <li>
                <strong>Cloud-Native Architecture</strong> - Built for
                scalability and reliability
              </li>
            </ul>

            <h2 className='text-2xl font-bold text-slate-900'>
              Technology Stack
            </h2>

            <p>
              AegisCare leverages modern web technologies including React,
              Next.js, and Tailwind CSS for the frontend, with AWS cloud
              infrastructure for backend services. This ensures a responsive,
              maintainable, and scalable platform.
            </p>

            <h2 className='text-2xl font-bold text-slate-900'>
              Security & Compliance
            </h2>

            <p>
              Security is at the core of AegisCare. The platform is designed
              with HIPAA compliance in mind, implementing role-based access
              controls, audit logging, and secure data handling practices to
              protect sensitive healthcare information.
            </p>
          </div>

          <div className='mt-10 flex gap-4'>
            <Link
              href='/explore-platform'
              className='rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700'
            >
              Explore Platform
            </Link>

            <Link
              href='/'
              className='rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-white'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}