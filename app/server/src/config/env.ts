import dotenv from 'dotenv'

dotenv.config()

export const env = {
  port: Number(process.env.PORT ?? 4000),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  databaseUrl:
    process.env.DATABASE_URL ??
    'postgres://aegiscare:aegiscare123@localhost:5432/aegiscare',
  jwtSecret: process.env.JWT_SECRET ?? 'dev-secret-change-me',
  uploadDir: process.env.UPLOAD_DIR ?? './uploads',
}
