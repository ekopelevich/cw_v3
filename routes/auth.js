'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
  if (req.user) res.send({user: req.user})
})

// Redirects to Twitter - first API call in auth process
router.get('/twitter', passport.authenticate('twitter'))

// This route receives the auth 'code' from Twitter
// The cb makes 2 api calls to Twitter to compare user credentials and get user info back
router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: process.env.SERVER_HOST + '/auth/success',
  failureRedirect: process.env.SERVER_HOST + '/auth/fail',
}))

router.get('/success', (req, res) => {
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
