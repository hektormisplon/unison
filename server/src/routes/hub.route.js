const controller = require('../controllers/hub.controller')
const auth = require('./auth')

module.exports = router => {
  router.get('/hubs', auth, controller.getHubs)
  router.get('/hubs/:id', auth, controller.getHub)
  router.post('/hubs', auth, controller.createHub)
  router.delete('/hubs', auth, controller.deleteHubs)
  router.delete('/hubs/:id', auth, controller.deleteHub)
}
