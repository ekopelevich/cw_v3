'use strict'

const express = require('express')
const router = express.Router()
const auth = require('./auth')
const users = require('./users')
const stories = require('./stories')
const chapters = require('./chapters')

router.get('/', function(req, res) {
  res.send('Collabowrite API') 
})

router.use('/auth', auth)
router.use('/users', users)
router.use('/users/:userId/stories', stories)
router.use('/stories', stories)
router.use('/stories/:storyId/chapters', chapters)

module.exports = router
