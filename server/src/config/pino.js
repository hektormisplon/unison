const logger = require('pino-http')({
  prettyPrint: {
    messageFormat: false, // --messageFormat
    levelFirst: true,
    translateTime: 'yyyy-mm-dd HH:MM:ss',
    ignore: 'pid,hostname',
  },
})

module.exports = logger
