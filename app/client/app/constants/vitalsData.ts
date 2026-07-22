import { TabType, TrendType, MockTrendData } from '@/types/aegis'

export const MOCK_VITALS: Record<TrendType, MockTrendData> = {
  bp: {
    value: '118',
    unit: 'mmHg (Systolic)',
    points: 'M 10 32 C 25 15, 40 38, 55 18 C 70 2, 85 40, 100 22',
    colorClass: 'text-indigo-600',
    strokeColor: '#6366f1',
    fillGradient: 'url(#bp-gradient)',
    glowColor: 'rgba(99, 102, 241, 0.4)',
  },
  weight: {
    value: '178',
    unit: 'lbs',
    points: 'M 10 38 C 25 35, 40 28, 55 24 C 70 20, 85 12, 100 10',
    colorClass: 'text-cyan-500',
    strokeColor: '#06b6d4',
    fillGradient: 'url(#weight-gradient)',
    glowColor: 'rgba(6, 182, 212, 0.4)',
  },
  glucose: {
    value: '94',
    unit: 'mg/dL',
    points: 'M 10 12 C 25 28, 40 10, 55 30 C 70 38, 85 14, 100 15',
    colorClass: 'text-emerald-500',
    strokeColor: '#10b981',
    fillGradient: 'url(#glucose-gradient)',
    glowColor: 'rgba(16, 185, 129, 0.4)',
  },
}

export const NAV_ITEMS: { id: TabType; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'appointments', label: 'Appointments', icon: '📅' },
  { id: 'records', label: 'Records', icon: '📑' },
  { id: 'documents', label: 'Documents', icon: '📂' },
  { id: 'messages', label: 'Messages', icon: '💬' },
  { id: 'profile', label: 'Profile', icon: '👤' },
]