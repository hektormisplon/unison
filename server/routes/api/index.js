const express = require('express')

const apiRouter = express.Router()

const authRouter = require('./auth.route')

authRouter(apiRouter)

module.exports = apiRouter
