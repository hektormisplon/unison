const express = require('express')

const userRouter = require('./user.route')

const apiRouter = express.Router()
userRouter(apiRouter)

module.exports = apiRouter
