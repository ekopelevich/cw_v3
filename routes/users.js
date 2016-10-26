'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/users')

router.get('/', function(req, res) {
  console.log('req.isAuthenticated', req.isAuthenticated())
  db.getAllUsers().then(records => {
    res.send(records)
  })
})

router.get('/:id/favorites', function(req, res) {
  db.getFavoritesByUser(req.params.id).then(records => {
    res.send(records)
  })
})

router.get('/:id', function(req, res) {
  db.getUser(req.params.id).then(record => {
    res.send(record)
  })
})

router.post('/', function(req, res) {
  db.findOrCreate(req.body).then(user => {
    res.send(user)
  })
})

router.put('/:id', function(req, res) {
  db.updateUser(req.params.id, req.body).then(() => {
    res.send({response: `User ${req.params.id} has been updated.`})
  })
})

module.exports = router
