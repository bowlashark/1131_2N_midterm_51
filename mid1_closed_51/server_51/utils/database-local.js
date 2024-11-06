import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: '0000',
  database: 'wp1_demo_51',
})

console.log('connecting local database', pool.options.database)

// const testDB = async () => {
//   try {
//     const results = await pool.query(`select * from blog_51`)
//     console.log('json data', results.rows)
//   } catch (error) {
//     console.log(error)
//   }
// }

// testDB()

export default pool
