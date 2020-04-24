const logger = require('pino-http')({
  prettyPrint: {
    colorize: true,
  },
})

module.exports = logger

