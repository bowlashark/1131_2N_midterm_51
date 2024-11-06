import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  host: 'aws-0-us-east-1.pooler.supabase.com',
  port: '5432',
  user: 'postgres.gywmvkqazrhsndbgytmw',
  password: 'EbieSk0OO7l3lSWQ',
  database: 'postgres',
})

console.log('connecting Supabase database', pool.options.database)

export default pool
