'use strict'

const express = require('express')
const router = express.Router()
const auth = require('./auth')
const users = require('./users')
const stories = require('./stories')
const chapters = require('./chapters')
const genres = require('./genres')

router.get('/', function(req, res) {
  res.send('Collabowrite API')
})

router.use('/auth', auth)
router.use('/users', users)
router.use('/users/:id/stories', stories)
router.use('/stories', stories)
router.use('/stories/:id/chapters', chapters)
router.use('/genres', genres)

module.exports = router
