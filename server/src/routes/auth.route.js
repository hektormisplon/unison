const controller = require('../controllers/auth.controller')

const initEndpoints = router => {
  router.post('/signup', controller.signup)
  router.post('/signin', controller.signin)
}

module.exports = initEndpoints
