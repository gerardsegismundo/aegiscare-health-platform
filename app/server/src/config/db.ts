import { Pool, type QueryResultRow } from 'pg'
import { env } from './env.js'

export const pool = new Pool({
  connectionString: env.databaseUrl,
})

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[]
) {
  const result = await pool.query<T>(text, params)
  return result.rows
}
