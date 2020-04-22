const initEndpoints = router => {
  router.get('/user', (req, res) => {
    res.send('/user route')
  })
}

module.exports = initEndpoints
