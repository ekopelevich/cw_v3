'use strict'

const express = require('express')
const router = express.Router()
const users = require('./users')
const stories = require('./stories')
const contributions = require('./contributions')

router.get('/', function(req, res) {
  res.send('Collabowrite API') // TODO: Document
})

router.use('/users', users)
router.use('/stories', stories)
router.use('/stories/:id/contributions', contributions)

module.exports = router
