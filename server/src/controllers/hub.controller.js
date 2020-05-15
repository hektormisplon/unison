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
