const controller = require('../controllers/auth.controller')

module.exorts = router => {
  router.post('/signup', controller.signup)
  router.post('/signin', controller.signin)
}
