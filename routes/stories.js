'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/stories')

router.get('/', function(req, res) {
  db.getAllStories().then(stories => {
    res.send({ data: stories })
  })
})

router.get('/:id', function(req, res) {
  db.getStory(req.params.id).then(story => {
    res.send(story)
  })
})

router.post('/', function(req, res) {
  db.createStory(req.body).then(idArray => {
    res.status(201).send({id: idArray[0]})
  })
})

router.put('/:id', function(req, res) {
  db.updateStory(req.params.id).then(id => {
    res.send(id)
  })
})

router.delete('/:id', function(req, res) {
  db.deleteStory(req.params.id).then(id => {
    res.send(id)
  })
})

module.exports = router
