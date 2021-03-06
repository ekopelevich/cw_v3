'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/genres')

router.get('/', function(req, res) {
  db.getGenres().then(genres => res.send(genres))
})

router.get('/:id', function(req, res) {
  db.getGenre(req.params.id).then(genre => res.send(genre))
})

module.exports = router
