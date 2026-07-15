export type UserRole = 'patient' | 'doctor' | 'admin'

export interface AuthenticatedUser {
  id: string
  email: string
  role: UserRole
  name: string
}
