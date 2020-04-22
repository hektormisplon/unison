const express = require('express'),
  cors = require('cors')

require('dotenv/config')

/*
Import modules */

const apiRouter = require('./routes/api')

/*
Init Express w/ middleware */

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
if (app.get('env') === 'development')
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', { message: err.message, error: err })
  })

/*
Router */

app.use('/api', apiRouter)

/*
Start server */

const server = app.listen(process.env.NODE_PORT, () => {
  const { address, port } = server.address()
  console.log(`Listening on | ${address}${port}`)
})
