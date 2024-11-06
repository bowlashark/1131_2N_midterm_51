import express from 'express'
const router = express.Router()

import db from '../utils/database.js'

router.get('/', async (req, res) => {
  try {
    const results = await db.query(`select * from blog_51`)
    console.log('blogs', JSON.stringify(results.rows))
    res.render('blog_51', {
      blogs: results.rows,
      pinfo: 'Hsingtai Chung, 123456789',
    })
  } catch (error) {
    console.log(error)
  }
})

export default router
