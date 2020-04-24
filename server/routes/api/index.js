const express = require('express')

const apiRouter = express.Router()

const authRouter = require('./auth.route')
const userRouter = require('./user.route')

authRouter(apiRouter)
userRouter(apiRouter)

module.exports = apiRouter
