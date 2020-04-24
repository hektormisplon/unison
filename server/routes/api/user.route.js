const auth = require('./auth')

const initEndpoints = router => {
  router.get('/user', auth, async (req, res) => {
    const { user } = req
    res.json(user)
  })
}

module.exports = initEndpoints
