const { geocoder } = require('../../config')
const Hub = require('./hub.model')

const addressToGeoJsonPoint = async address => {
  /* Mock response in development */
  /* TODO: Remove me */
  return {
    type: 'Point',
    coordinates: [
      -1.4458572 + Math.random(-0.05, 0.05),
      51.1576661 + Math.random(-0.05, 0.05),
    ],
    formattedAddress: address,
  }

  try {
    const coords = await geocoder.geocode(address)
    const { longitude, latitude, formattedAddress } = coords[0]
    return {
      type: 'Point',
      coordinates: [longitude, latitude],
      formattedAddress,
    }
  } catch (err) {
    console.error(err)
  }
}

exports.createHub = async ({ body, user }, res) => {
  try {
    const { name, address } = body
    let { location } = body

    if (address) location = await addressToGeoJsonPoint(address)

    if (!location)
      return res
        .status(400)
        .json({ message: 'Please specify a valid address or location' })

    const hub = await new Hub({
      created_by: user.id,
      name,
      location,
    }).save()

    res.status(201).json({ hub })
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getHubs = async (req, res) => {
  try {
    const hubs = await Hub.find()
    res.json(hubs)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getHub = async (req, res) => {
  try {
    const { id } = req.params
    const hub = await Hub.findById(id)
    res.status(200).json(hub)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.deleteHub = async (req, res) => {
  try {
    const { id } = req.params
    const hub = await Hub.findByIdAndDelete(id)
    res.status(410).json(hub)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.deleteHubs = async (req, res) => {
  try {
    const hubs = await Hub.deleteMany()
    res.status(410).json(hubs)
  } catch (err) {
    res.status(500).json(err)
  }
}
