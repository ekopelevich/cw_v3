'use strict'

const express = require('express')
const router = express.Router()
const users = require('./users')
const stories = require('./stories')
const chapters = require('./chapters')

router.get('/', function(req, res) {
  res.send('Collabowrite API') // TODO: Document
})

router.use('/users', users)
router.use('/stories', stories)
router.use('/users/:id/stories', chapters)
router.use('/:id/chapters', chapters)

module.exports = router
