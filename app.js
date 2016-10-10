'use strict'

require('dotenv').config()

const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
// const fortune = require('fortune')
const index = require('./routes/index')
const session = require('express-session')
const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
// const auth = require('./routes/auth')
const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

passport.use(new Strategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
  },
  function(token, tokenSecret, profile, cb) {
    cb(null, {id: profile.id, displayName: profile.displayName})
  })
)

app.use(session({secret: 'secret', saveUninitialized: true, resave: true}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

app.get('/auth/twitter',
  passport.authenticate('twitter'),
  function(req, res){
    // The request will be redirected to Twitter for authentication,
    // so this function will not be called.
    res.send('This function shouldn\'t have been called')
  })

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login',
}))

app.get('/logout', function(req, res){
  res.redirect('/')
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
