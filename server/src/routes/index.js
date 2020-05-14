const express = require('express')

const apiRouter = express.Router()

const authRouter = require('./auth.route')
const hubRouter = require('./hub.route')
const userRouter = require('./user.route')

authRouter(apiRouter)
userRouter(apiRouter)
hubRouter(apiRouter)

module.exports = apiRouter
