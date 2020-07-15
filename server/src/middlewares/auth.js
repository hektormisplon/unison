const jwt = require('jsonwebtoken')

const { env } = require('../config')

module.exports = (req, res, next) => {
  const token = req.header('Authorization')
  if (!token) return res.status(401).json({ message: 'Not authenticated' })

  try {
    const verified = jwt.verify(token, env.JWT_SECRET)
    req.user = verified
    next()
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' })
  }
}
