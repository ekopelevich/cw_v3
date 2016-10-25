'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/favorites')

router.post('/', function(req, res) {
  db.setFavorite(req.body).then(id => res.send({id:id}))
})

module.exports = router
