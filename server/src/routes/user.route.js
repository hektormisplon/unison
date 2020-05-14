const userController = require('../controllers/user.controller')
const auth = require('./auth')

const initEndpoints = router => {
  router.get('/user', auth, userController.getUsers)
  router.get('/user:id', auth, userController.getUser)
  router.delete('/user', auth, userController.deleteUsers)
  router.delete('/user:id', auth, userController.deleteUser)
}

module.exports = initEndpoints
