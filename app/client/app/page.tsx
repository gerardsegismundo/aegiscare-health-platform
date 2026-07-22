'use client'

import { useState } from 'react'
import { TabType } from '@/types/aegis'
import { useLivePulse } from '@/hooks/useLivePulse'
import Header from '@/components/Header'
import MarketingHero from '@/components/MarketingHero'
import BrowserMockup from '@/components/portal/BrowserMockup'
import DashboardTab from '@/components/portal/tabs/DashboardTab'
import AppointmentsTab from '@/components/portal/tabs/AppointmentsTab'
import RecordsTab from '@/components/portal/tabs/RecordsTab'
import DocumentsTab from '@/components/portal/tabs/DocumentsTab'
import MessagesTab from '@/components/portal/tabs/MessagesTab'
import ProfileTab from '@/components/portal/tabs/ProfileTab'
import Footer from '@/components/Footer'

export default function AegisCareHomepage() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const liveBpm = useLivePulse(72)

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />
      case 'appointments':
        return <AppointmentsTab />
      case 'records':
        return <RecordsTab />
      case 'documents':
        return <DocumentsTab />
      case 'messages':
        return <MessagesTab />
      case 'profile':
        return <ProfileTab />
    }
  }

  return (
    <div className='h-screen w-screen bg-slate-50 text-slate-800 flex flex-col justify-between overflow-hidden relative selection:bg-indigo-100 selection:text-indigo-900'>
      {/* Background Light Leaks */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
        <div className='absolute top-[-10%] left-[-10%] h-[500px] w-[500px] bg-indigo-200/20 blur-[130px] rounded-full' />
        <div className='absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] bg-cyan-200/25 blur-[150px] rounded-full' />
      </div>

      <Header />

      <main className='w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col lg:flex-row items-center gap-8 lg:gap-12 z-10 relative overflow-hidden'>
        <MarketingHero />

        {/* Floating 3D Browser Mockup Container */}
        <div className='flex-grow flex items-center justify-center relative w-full lg:w-[55%] py-8 overflow-visible min-h-[460px] sm:min-h-[500px]'>
          <div className='absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none' />
          <div className='absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none' />

          <BrowserMockup activeTab={activeTab} onTabChange={setActiveTab} liveBpm={liveBpm}>
            {renderTabContent()}
          </BrowserMockup>
        </div>
      </main>

      <Footer />
    </div>
  )
}