const express = require('express')

const apiRouter = express.Router()

const authRouter = require('./auth/auth.route')
const hubRouter = require('./hub/hub.route')
const userRouter = require('./user/user.route')

authRouter(apiRouter)
userRouter(apiRouter)
hubRouter(apiRouter)

module.exports = apiRouter
