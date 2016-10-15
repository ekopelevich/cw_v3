'use strict'

const express = require('express')
const router = express.Router()
const auth = require('./auth')
const users = require('./users')
const stories = require('./stories')

router.get('/', function(req, res) {
  res.send('Collabowrite API') // TODO: Document
})

router.use('/auth', auth)
router.use('/users', users)
router.use('/users/:id/stories', stories)
router.use('/stories', stories)
router.use('/stories/:id/chapters', stories)

module.exports = router
