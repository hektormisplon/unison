const cookieParser = require('cookie-parser'),
  cors = require('cors'),
  express = require('express')

const { logger } = require('./config')

/*
Import routes*/

const apiRouter = require('./routes')

/*
Init Express w/ middleware */

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(logger)

/*
Router */

app.use('/api', apiRouter)

module.exports.app = app
