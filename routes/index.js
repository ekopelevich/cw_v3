'use strict'

const express = require('express')
const router = express.Router()
const users = require('./users')
const stories = require('./stories')

router.get('/', function(req, res) {
  res.send('Collabowrite API') // TODO: Document
})

router.use('/users', users)
router.use('/stories', stories)

module.exports = router
