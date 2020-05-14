const jwt = require('jsonwebtoken')

const { env } = require('../config')
const Hub = require('../models/hub.model')

exports.createHub = async (req, res) => {
  try {
    const token = req.header('auth-token')
    const { id } = jwt.verify(token, env.JWT_SECRET)
    const { name } = req.body
    const hub = await new Hub({ created_by: id, name }).save()
    res.status(201).json({ hub })
  } catch (err) {
    res.status(400).json(err)
  }
}

exports.getHubs = async (req, res) => {
  try {
    const hubs = await Hub.find()
    res.json(hubs)
  } catch (err) {
    res.status(400).json(err)
  }
}

exports.getHub = async (req, res) => {
  res.json({ message: 'getting hub' })
}

exports.deleteHubs = async (req, res) => {
  res.json({ message: 'deleting hubs' })
}

exports.deleteHub = async (req, res) => {
  res.json({ message: 'deleting hub' })
}
