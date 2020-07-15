const { auth } = require('../../middlewares')
const controller = require('./hub.controller')

module.exports = router => {
  router.get('/hubs', auth, controller.getHubs)
  router.get('/hubs/:id', auth, controller.getHub)
  router.post('/hubs', auth, controller.createHub)
  router.delete('/hubs', auth, controller.deleteHubs)
  router.delete('/hubs/:id', auth, controller.deleteHub)
}
