import pg from 'pg'
const { Pool } = pg

let pool

if (process.env.DATABASE === 'LOCAL') {
  pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '0000',
    database: 'midterm_2n_51',
  })
  console.log('connecting local database', pool.options.database)
} else if (process.env.DATABASE === 'SUPABASE') {
  pool = new Pool({
    host: process.env.SUPABASE_HOST,
    port: process.env.SUPABASE_PORT,
    user: process.env.SUPABASE_USER,
    password: process.env.SUPABASE_PASSWORD,
    database: process.env.SUPABASE_DATABASE,
  })

  console.log('connecting Supabase database', pool.options.database)
}

const testDB = async () => {
  try {
    const results = await pool.query(`select * from menu_51`)
    console.log('menu_51 data', results.rows)
  } catch (error) {
    console.log(error)
  }
}

testDB()

export default pool
