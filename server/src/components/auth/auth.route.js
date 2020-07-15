const controller = require('./auth.controller')

module.exports = router => {
  router.post('/signup', controller.signup)
  router.post('/signin', controller.signin)
}
