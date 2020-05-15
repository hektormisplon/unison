const NodeGeocoder = require('node-geocoder')

module.exports = NodeGeocoder({
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: '',
})
