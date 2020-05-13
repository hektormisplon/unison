const bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  { env } = require('../config')

const User = require('../models/user.model')
const {
  validateSignup,
  validateSignin,
} = require('../validation/auth.validator')

/*
Validate request & handle validation error */

exports.signup = async (req, res) => {
  const { email, password } = req.body

  const { error } = validateSignup(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const user = await User.findOne({ email })
  if (user) return res.status(400).json({ message: 'Email already in use' })

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  try {
    const user = await new User({ email, password: hashedPassword }).save()
    res.json({ userId: user._id })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

/*
Sign in */
exports.signin = async (req, res) => {
  const { email, password } = req.body

  const { error } = validateSignup(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    // Check if user in database
    const user = await User.findOne({ email })
    if (!user) return res.status(400).send('Invalid email or password')

    // Check password
    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if (!isCorrectPassword)
      return res.status(400).send('Invalid email or password')

    // Assign jwt
    const token = jwt.sign({ id: user._id }, env.JWT_SECRET)
    res.header('auth-token', token).json({ token })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
