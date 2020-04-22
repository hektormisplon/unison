const User = require('../../models/user.model')

const initEndpoints = router => {
  router.get('/user', async (req, res) => {
    res.send('/user route')
  })

  router.post('/user', async (req, res) => {
    try {
      const user = await new User({ email: req.body.email }).save()
      res.json(user)
    } catch (err) {
      res.json({ message: err })
    }
  })
}

module.exports = initEndpoints
