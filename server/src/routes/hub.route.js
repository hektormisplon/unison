const controller = require('../controllers/hub.controller')
const auth = require('./auth')

const initEndpoints = router => {
  router.get('/hubs', auth, controller.getHubs)
  router.get('/hubs/:id', auth, controller.getHub)
  router.post('/hubs', auth, controller.createHub)
  router.delete('/hubs/:id', auth, controller.deleteHub)
}

module.exports = initEndpoints
