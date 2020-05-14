const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')

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

app.use((req, res, next) => res.status(404).json({ message: 'Not found' }))

/*
Router */

app.use('/api', apiRouter)

module.exports.app = app
