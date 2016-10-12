'use strict'

const express = require('express')
const router = express.Router()
const passport = require('passport')
const app = require('../app')
// const db = require('../db/api')

router.get('/', (req, res) => {
  if (app.locals) {
    console.log('user id', app.locals.user.id)
    res.send({user: app.locals.user})
  }
  res.end()
})

router.get('/twitter', passport.authenticate('twitter'), function(req, res){
  // The request will be redirected to Twitter for authentication,
  // so this function will not be called.
  res.send('Error: This function should not run.')
})

router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: 'http://localhost:3000/api/v1/auth/success',
  failureRedirect: 'http://localhost:3000/api/v1/auth/fail',
}))

router.get('/success', (req, res) => {
  console.log('username', req.session.passport.user.username)
  res.redirect('http://localhost:8080')
})

router.get('/fail', (req, res) => {
  res.redirect('http://localhost:8080')
})

router.get('/logout', (req, res) => {
  res.redirect('/')
})


module.exports = router
