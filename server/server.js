require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const db = require('./db')

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// COOKIE
app.use(cookieParser())

// ADD LOG
app.use(morgan('dev'))

// ADD CORS
const cors = require('cors')
app.use(cors())

//ALL USE ROUTER
app.use('/', require('./route/index'))
app.use('/api', require('./route/user'))
app.use('/api', require('./route/company'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// ENV
const port = process.env.PORT || 5001
app.listen(port, () => {
  console.log('server is up and listening')
})

module.export = app
