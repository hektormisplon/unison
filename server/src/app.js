require('dotenv/config')
const cookieParser = require('cookie-parser'),
  cors = require('cors'),
  express = require('express'),
  mongoose = require('mongoose'),
  path = require('path'),
  pino = require('pino-http')({
    prettyPrint: { colorize: true },
  })

/*
Import routes*/

const apiRouter = require('./routes/api')

/*
Init Express w/ middleware */

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(pino)

/*
Connect to mongodb */

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.info('Connected to database'))
  .catch(err => console.error(err))

/*
Router */

app.use('/api', apiRouter)

/*
Start server */

const server = app.listen(process.env.NODE_PORT, () => {
  const { address, port } = server.address()
  console.info(`Listening on | ${address}${port}`)
})
