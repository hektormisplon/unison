const logger = require('pino-http')({
  prettyPrint: {
    levelFirst: true,
    translateTime: 'yyyy-mm-dd HH:MM:ss',
    ignore: 'pid,hostname',
  },
})

module.exports = logger
