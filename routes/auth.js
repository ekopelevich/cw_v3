'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
  if (!req.app.locals.user) res.end()
  res.send({user: req.app.locals.user})
})

router.get('/twitter', passport.authenticate('twitter'), function(req, res){
  // The request will be redirected to Twitter for authentication,
  // so this function will not be called.
  res.send('Error: This function should not run.')
})

router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: process.env.SERVER_HOST + '/auth/success',
  failureRedirect: process.env.SERVER_HOST + '/auth/fail',
}))

router.get('/success', (req, res) => {
  console.log('user id', req.user[0].id)
  console.log('passport user', req.session.passport.user)
  req.session.user = req.user[0]
  if (!req.session.passport) req.app.locals.user = null
  else req.app.locals.user = req.session.passport.user[0]
  console.log('userid', req.app.locals.user.id)
  res.redirect(`${process.env.CLIENT_HOST}/#/users/${req.app.locals.user}/dashboard`)
})

router.get('/fail', (req, res) => {
  res.redirect(process.env.CLIENT_HOST)
})

router.get('/logout', (req, res) => {
  req.user = null
  res.redirect(process.env.CLIENT_HOST)
})

module.exports = router
