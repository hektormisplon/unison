const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')

const api = require('./components/index')
const { logger } = require('./config')

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
app.use('/api', api)

/*
Handle 404 & 500 */
app.use((req, res) => res.status(404).json({ message: 'Not found' }))
app.use((err, req, res, next) =>
  res.status(500).json({ message: 'Internal server error' }, err)
)

module.exports.app = app
