require('dotenv/config')
const logger = require('./pino'),
  db = require('./db')

if (!process.env.NODE_ENV) console.error('.env: Environment not found')

module.exports.env = {
  PORT: process.env.NODE_PORT,
  HOST: process.env.NODE_HOST,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_PWD: process.env.MONGO_PWD,
  JWT_TOKEN: process.env.JWT_TOKEN,
  LOG_LEVEL: process.env.LOG_LEVEL,
}

module.exports.logger = logger
module.exports.dbConnection = db
