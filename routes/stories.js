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
  console.log('body', req.body)
  db.createStory(req.body).then(idArray => {
    const id = idArray[0]
    console.log('post story route, id', id)
    res.status(201).send({id: id})
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
