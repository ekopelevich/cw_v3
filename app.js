'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const index = require('./routes/index')
const session = require('express-session')

const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const db = require('./db/users')

passport.use(new Strategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: 'http://localhost:3000/api/v1/auth/twitter/callback',
},
function(token, tokenSecret, profile, cb) {
  db.findOrCreate(profile, token, tokenSecret)
  .then(user => cb(null, user))
}))

passport.serializeUser(function(user, cb) {
  cb(null, user)
})
passport.deserializeUser(function(obj, cb) {
  cb(null, obj)
})

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.all((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CLIENT_HOST)
  res.header('Access-Control-Allow-Headers', 'Authorization')
  next()
})

app.use(session({secret: process.env.SESSION_SECRET, saveUninitialized: true, resave: true}))
app.use(passport.initialize())
app.use(passport.session())

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
