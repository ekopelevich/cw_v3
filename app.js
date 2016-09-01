'use strict'

const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const index = require('./routes/index')
const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/v1', index)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler - will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500)
    res.send({'error': { message: err.message, error: err }})
  })
}

// production error handler - no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500)
  res.send({'error': { message: err.message, error: err }})
})

module.exports = app
