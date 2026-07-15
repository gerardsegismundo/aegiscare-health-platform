import Link from 'next/link'
import Footer from '@/components/Footer'

export default function ExplorePlatformPage() {
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
        <div className='mx-auto max-w-4xl'>
          <h1 className='text-4xl font-bold'>Explore the AegisCare Platform</h1>

          <p className='mt-6 text-lg text-slate-600'>
            Discover how AegisCare transforms healthcare management with its
            comprehensive suite of tools designed for patients, healthcare
            providers, and administrators.
          </p>

          {/* Platform Overview */}
          <div className='mt-12 grid gap-8 md:grid-cols-2'>
            <div className='rounded-2xl bg-white p-6 shadow-sm'>
              <h2 className='text-2xl font-bold'>For Patients</h2>

              <p className='mt-3 text-slate-600'>
                Access your healthcare information securely from anywhere.
              </p>

              <ul className='mt-4 space-y-2 text-slate-600'>
                <li>• View and manage appointments</li>
                <li>• Access medical documents</li>
                <li>• Update personal information</li>
                <li>• Communicate with healthcare providers</li>
              </ul>
            </div>

            <div className='rounded-2xl bg-white p-6 shadow-sm'>
              <h2 className='text-2xl font-bold'>For Healthcare Providers</h2>

              <p className='mt-3 text-slate-600'>
                Streamline your practice with powerful management tools.
              </p>

              <ul className='mt-4 space-y-2 text-slate-600'>
                <li>• Review patient information</li>
                <li>• Manage appointment schedules</li>
                <li>• Maintain clinical notes</li>
                <li>• Access patient medical history</li>
              </ul>
            </div>

            <div className='rounded-2xl bg-white p-6 shadow-sm'>
              <h2 className='text-2xl font-bold'>For Administrators</h2>

              <p className='mt-3 text-slate-600'>
                Oversee platform operations with comprehensive admin tools.
              </p>

              <ul className='mt-4 space-y-2 text-slate-600'>
                <li>• Manage user accounts</li>
                <li>• Monitor platform activity</li>
                <li>• Configure system settings</li>
                <li>• Generate reports and analytics</li>
              </ul>
            </div>

            <div className='rounded-2xl bg-white p-6 shadow-sm'>
              <h2 className='text-2xl font-bold'>Security & Compliance</h2>

              <p className='mt-3 text-slate-600'>
                Built with healthcare data protection as a top priority.
              </p>

              <ul className='mt-4 space-y-2 text-slate-600'>
                <li>• HIPAA-compliant architecture</li>
                <li>• Role-based access controls</li>
                <li>• End-to-end encryption</li>
                <li>• Comprehensive audit logging</li>
              </ul>
            </div>
          </div>

          {/* Architecture Section */}
          <div className='mt-16 rounded-2xl bg-slate-900 p-8 text-white'>
            <h2 className='text-3xl font-bold'>Cloud-Native Architecture</h2>

            <p className='mt-4 text-lg text-slate-300'>
              AegisCare is built on modern cloud infrastructure, ensuring
              scalability, reliability, and performance. The platform leverages
              AWS services for robust backend operations while maintaining a
              responsive and intuitive user experience.
            </p>

            <div className='mt-8 grid gap-6 md:grid-cols-3'>
              <div className='rounded-lg bg-slate-800 p-6'>
                <h3 className='text-xl font-semibold'>Scalable Infrastructure</h3>

                <p className='mt-2 text-slate-300'>
                  Built to grow with your organization, handling increasing
                  workloads without compromising performance.
                </p>
              </div>

              <div className='rounded-lg bg-slate-800 p-6'>
                <h3 className='text-xl font-semibold'>High Availability</h3>

                <p className='mt-2 text-slate-300'>
                  Designed for 99.9% uptime with redundant systems and
                  failover mechanisms.
                </p>
              </div>

              <div className='rounded-lg bg-slate-800 p-6'>
                <h3 className='text-xl font-semibold'>Data Security</h3>

                <p className='mt-2 text-slate-300'>
                  Enterprise-grade security with encryption, access controls, and
                  compliance monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-12 text-center'>
            <h2 className='text-3xl font-bold'>Ready to Get Started?</h2>

            <p className='mt-4 text-lg text-slate-600'>
              Join healthcare organizations already using AegisCare to transform
              their operations.
            </p>

            <div className='mt-8 flex justify-center gap-4'>
              <Link
                href='/login'
                className='rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white hover:bg-emerald-700'
              >
                Get Started
              </Link>

              <Link
                href='/learn-more'
                className='rounded-xl border border-slate-300 px-8 py-3 font-semibold hover:bg-white'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}