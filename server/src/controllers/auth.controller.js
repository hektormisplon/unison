const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { env } = require('../config')
const User = require('../models/user.model')
const {
  validateSignup,
  validateSignin,
} = require('../validation/auth.validator')

/*
Validate request & handle validation error */

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body

    const { error } = validateSignup(req.body)
    if (error)
      return res.status(400).json({ message: error.details[0].message })

    let user = await User.findOne({ email })
    if (user) return res.status(400).json({ message: 'Email already in use' })

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    user = await new User({ email, password: hashedPassword }).save()
    res.status(201).json({ userId: user._id })
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

/*
Sign in */
exports.signin = async (req, res) => {
  const { email, password } = req.body

  const { error } = validateSignin(req.body)
  if (error) return res.status(400).json({ message: error.details[0].message })

  try {
    // Check if user in database
    const user = await User.findOne({ email })
    if (!user)
      return res.status(400).json({ message: 'Invalid email or password' })

    // Check password
    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if (!isCorrectPassword)
      return res.status(400).json({ message: 'Invalid email or password' })

    // Assign jwt
    const token = jwt.sign({ id: user._id }, env.JWT_SECRET)
    res.header('auth-token', token).json({ token })
  } catch (err) {
    res.status(500).json({ message: err })
  }
}
