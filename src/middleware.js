var bodyParser = require('body-parser')

module.exports = function(app) {
  console.log('inside middleware...')
  
  require('./services/logging.js')(app)

  // the endpoints are here for now,
  // will make into routers

  // friend related
  app.get('/friends', function(req, res, next) {
    console.log('GETTING friends')
    next()
  })

  app.get('/friends/:id', function(req, rex, next) {
    console.log('GETTING friend: ', req.params.id)
    next()
  })

  app.post('/friends/:id/', function(req, rex, next) {
    console.log('POSTING to friend: ', req.params.id)
    console.log('with msg: ', req.body)
    next()
  })

  // user related
  app.get('/user', function(req, res, next) {
    console.log('GETTING user')
    next()
  })

  app.get('/user/:id', function(req, res, next) {
    console.log('GETTING user: ', req.params.id)
    next()
  })

  app.use(function(req, res) {
    console.log('final function before sending response')
    res.send()
  })  

}
