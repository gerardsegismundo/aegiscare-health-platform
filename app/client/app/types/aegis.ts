export type TabType =
  | 'dashboard'
  | 'appointments'
  | 'records'
  | 'documents'
  | 'messages'
  | 'profile'

export type TrendType = 'bp' | 'weight' | 'glucose'

export interface MockTrendData {
  value: string
  unit: string
  points: string
  colorClass: string
  strokeColor: string
  fillGradient: string
  glowColor: string
}

export interface Message {
  sender: 'doctor' | 'patient'
  text: string
  time: string
}