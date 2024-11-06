import express from 'express'
import logger from 'morgan'
import cors from 'cors'
const app = express()
const path = require('path')
const apiMenuRouter_xx = require('./routes/api/midterm_xx/apiMenuRouter_xx')

import db from './utils/database.js'
import blogRouter from './routes/blogRouter.js'
import apiBlogRouter from './routes/api/apiBlogRouter.js'
import apiMenuRouter from './routes/api/midterm_51/apiMenuRouter_51.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/blog_51', blogRouter)

app.use('/api/menu_51', apiMenuRouter)

app.use('/', (req, res, next) => {
  res.send('Hsingtai Chung, 123456789')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
