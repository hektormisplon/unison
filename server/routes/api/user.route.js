const User = require('../../models/user.model')
const {
  validateSignup,
  validateSignin,
} = require('../../validation/auth.validator')

const initEndpoints = router => {
  router.get('/user', async (req, res) => {
    res.send('/user route')
  })

  router.post('/user', async (req, res) => {
    const { email } = req.body

    const { error } = validateSignup(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Check if user is already in database
    const isInUse = await User.findOne({ email })
    if (isInUse)
      return res.status(400).json({ message: 'Email already in use' })

    try {
      const user = await new User({ email }).save()
      res.json(user)
    } catch (err) {
      res.status(400).json({ message: err })
    }
  })
}

module.exports = initEndpoints
