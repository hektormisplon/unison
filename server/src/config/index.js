require('dotenv/config')
const db = require('./db')
const geocoder = require('./geocoder')
const logger = require('./pino')

if (!process.env.NODE_ENV) console.error('.env: Environment not found')

module.exports.env = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.NODE_PORT,
  HOST: process.env.NODE_HOST,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_PWD: process.env.MONGO_PWD,
  JWT_SECRET: process.env.JWT_SECRET,
  LOG_LEVEL: process.env.LOG_LEVEL,
  GEOCODER_PROVIDER: process.env.GEOCODER_PROVIDER,
}

module.exports.logger = logger
module.exports.dbConnection = db
module.exports.geocoder = geocoder
