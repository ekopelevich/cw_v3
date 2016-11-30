'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const passport = require('passport')
const storyDb = require('../db/stories')

router.get('/', (req, res) => {
  if (req.isAuthenticated()) res.send({user: req.user})
  else res.end()
})

// Redirects to Twitter - first API call in auth process
router.get('/twitter', passport.authenticate('twitter'))

// This route receives the auth 'code' from Twitter
// The cb makes 2 api calls to Twitter to compare user credentials and get user info back
router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/api/v1/auth/success',
  failureRedirect: process.env.CLIENT_HOST,
}))

router.get('/success', (req, res) => {
  res.redirect(`${process.env.CLIENT_HOST}/users/${req.user.id}/profile`)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect(process.env.CLIENT_HOST)
})

// Checks if user is authorized based on resource id and logged in user id
router.get('/:id', (req, res) => {
  storyDb.getStory(req.params.id)
  .then(story => {
    if (story.user_id === req.user.id) res.send({authorized: true})
    else res.send({authorized: false})
  })
})

module.exports = router
