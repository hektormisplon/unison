const cookieParser = require('cookie-parser'),
  cors = require('cors'),
  express = require('express'),
  mongoose = require('mongoose')

const { env, logger, dbConnection } = require('./config')

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
Connect to mongodb */

mongoose.connect(env.MONGO_URI, dbConnection).catch(err => console.error(err))

/*
Router */

app.use('/api', apiRouter)

/*
Start server */

const server = app.listen(env.PORT, env.HOST, () => {
  const { address, port } = server.address()
  console.info(`[runs on] ${address}:${port}`)
})
