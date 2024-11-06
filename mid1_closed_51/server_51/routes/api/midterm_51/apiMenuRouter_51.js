import express from 'express'
const router = express.Router()

import db from '../../utils/database'

router.get('/', async (req, res) => {
  try {
    const results = await db.query(`select * from public.menu_51`)
    res.json(results.rows)
  } catch (error) {
    console.log(error)
  }
})

export default router
