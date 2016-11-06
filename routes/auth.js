'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
  console.log('auth - req.user', req.user)
  if (!req.app.locals.user) res.end()
  res.send({user: req.app.locals.user})
})

// this first method redirects to github
router.get('/twitter', passport.authenticate('twitter'))

// this route receives the auth 'code' from twitter
// this second authenticate function makes 2 api calls to github
// to compare user credentials and get user info back
router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: process.env.SERVER_HOST + '/auth/success',
  failureRedirect: process.env.SERVER_HOST + '/auth/fail',
}))

//
router.get('/success', (req, res) => {
  console.log('success - req.user', req.user)
  req.app.locals.user = req.user
  if (!req.session) req.app.locals.user = null
  else req.app.locals.user = req.session.passport.user
  res.redirect(process.env.CLIENT_HOST)
})

router.get('/fail', (req, res) => {
  res.redirect(process.env.CLIENT_HOST)
})

router.get('/logout', (req, res) => {
  req.app.locals.user = null
  res.redirect(process.env.CLIENT_HOST)
})

module.exports = router
