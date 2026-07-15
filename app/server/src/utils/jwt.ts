import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import type { AuthenticatedUser } from '../types/auth.js'

export function signToken(payload: AuthenticatedUser) {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: '8h' })
}

export function verifyToken(token: string) {
  return jwt.verify(token, env.jwtSecret) as AuthenticatedUser
}
