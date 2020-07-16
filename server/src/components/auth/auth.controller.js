const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const { env } = require('../../config')
const User = require('../user/user.model')
const { validateSignup, validateSignin } = require('./auth.validator')

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
exports.signin = async (req, res, next) => {
  if (!req.body.email || !req.body.password) return res.sendStatus(400)
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(400).json({ message: err })
    if (!user)
      return res.status(401).json({ message: 'Invalid email or password' })
    req.logIn(user, err => {
      if (err) return res.status(400).json({ message: err })
      return res.status(200).json({ user })
    })
  })(req, res, next)
}
