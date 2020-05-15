const controller = require('../controllers/auth.controller')

module.exports = router => {
  router.post('/signup', controller.signup)
  router.post('/signin', controller.signin)
}
