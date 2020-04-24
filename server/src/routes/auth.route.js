const authController = require('../controllers/auth.controller')

const initEndpoints = router => {
  router.post('/signup', authController.signup)
  router.post('/signin', authController.signin)
}

module.exports = initEndpoints
