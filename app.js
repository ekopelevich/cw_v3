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
const cookieSession = require('cookie-session')
const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const db = require('./db/users')

const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200,
  credentials: true,
}

app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieSession({name: 'cwSession', keys: [process.env.KEY1, process.env.KEY2]}))
app.use(passport.initialize())
app.use(passport.session()) // Reads to and writes from sessions on every request

passport.use(new Strategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: 'http://localhost:3000/api/v1/auth/twitter/callback',
},

// This happens after passport.authenticate - after the 2 provider API calls are made
function(token, tokenSecret, profile, cb) {
  db.findOrCreate(profile, token, tokenSecret)
  .then(user => {
    // Runs after the initial login
    cb(null, {id: user[0].id, first_name: user[0].first_name, last_name: user[0].last_name})
  })
}))

// Turns user into session id encoding a user
passport.serializeUser(function(user, cb) {
  cb(null, user) // Calling cb here passes data into session
})

// Gets called on every request - find user by id and returns a user
passport.deserializeUser(function(obj, cb) {
  db.getUser(obj.id).then(user => cb(null, user))
})

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
