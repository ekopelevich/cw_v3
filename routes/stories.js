'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })
const db = require('../db/stories')

router.get('/', function(req, res) {
  console.log('here', req.params.id)
  if (req.params.id) db.getStoriesByUser(req.params.id).then(stories => res.send({ data: stories }))
  else db.getAllStories().then(stories => res.send({ data: stories }))
})

router.get('/:id', function(req, res) {
  db.getStory(req.params.id).then(story => res.send(story))
})

router.post('/', function(req, res) {
  db.createStory(req.body).then(idArray => res.status(201).send({ id: idArray[0] }))
})

router.put('/:id', function(req, res) {
  db.updateStory(req.params.id).then(id => res.send({ id: id }))
})

router.delete('/:id', function(req, res) {
  db.deleteStory(req.params.id).then(id => res.send({ id: id }))
})

module.exports = router
