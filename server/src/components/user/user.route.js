const { auth } = require('../../middlewares')
const controller = require('./user.controller')

module.exports = router => {
  router.get('/users', auth, controller.getUsers)
  router.get('/users/:id', auth, controller.getUser)
  router.delete('/users', auth, controller.deleteUsers)
  router.delete('/users/:id', auth, controller.deleteUser)
}
