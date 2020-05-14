const mongoose = require('mongoose')

const { app } = require('./app')
const { env, dbConnection } = require('./config')

/*
Connect to mongodb */

mongoose.connect(env.MONGO_URI, dbConnection).catch(err => console.error(err))

/*
Start server */

const server = app.listen(env.PORT, env.HOST, () => {
  const { address, port } = server.address()
  console.info(`[runs on] ${address}:${port}`)
})
