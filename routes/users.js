'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/users')

router.get('/', function(req, res) {
  console.log('req')
  db.getAllUsers().then(records => {
    res.send(records)
  })
})

router.get('/:id', function(req, res) {
  db.getUser(req.params.id).then(record => {
    console.log(record)
    res.send(record)
  })
})

router.post('/', function(req, res) {
  console.log('post route', req.body)
  db.findOrCreate(req.body).then(user => {
    res.send(user)
  })
})

router.put('/:id', function(req, res) {
  db.updateUser(req.body).then(() => {
    res.json({'response': 'user updated'})
  })
})

router.delete('/:id', function(req, res) {
  db.deleteUser(req.params.id).then((id) => {
    res.json({'response': `user ${id} deleted`})
  })
})

module.exports = router
