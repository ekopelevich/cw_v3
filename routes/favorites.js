'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/favorites')

router.post('/', function(req, res) {
  console.log(req.body)
  db.setFavorite(req.body).then(favId => res.send(favId))
})

module.exports = router
