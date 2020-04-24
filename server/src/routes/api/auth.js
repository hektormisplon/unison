const jwt = require('jsonwebtoken')

const config = require('../../config')

const auth = (req, res, next) => {
  const token = req.header('auth-token')
  if (!token) return res.status(401).json({ message: 'Not authenticated' })

  try {
    const verified = jwt.verify(token, config.JWT_SECRET)
    req.user = verified
    next()
  } catch (err) {
    res.status(400).send('Invalid token')
  }
}

module.exports = auth
