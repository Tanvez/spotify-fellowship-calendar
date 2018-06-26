const path = require('path')
const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8080
const {db} = require('./db')

module.exports = app

const createApp = () => {
  // logging middleware
  app.use(volleyball)

  // body parsing middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/api', require('./api'))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))
  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })
  
  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}
const startListening = () => {
  // start listening
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
}

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node CalendarBackend/index.js' (or 'nodemon CalendarBackend/index.js', or 'nodemon CalendarBackend', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  db.sync()
    .then(createApp)
    .then(startListening)
} else {
  createApp()
}