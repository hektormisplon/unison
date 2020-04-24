const auth = require('./auth')

const initEndpoints = router => {
  router.get('/user', auth, async (req, res) => {
    req.log.info('user request')
    const { user } = req
    res.json(user)
  })
}

module.exports = initEndpoints
