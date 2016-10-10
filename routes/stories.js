'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/api')

router.get('/', function(req, res) {
  db.getAllStories().then(stories => {
    res.header('Content-Type', 'application/vnd.api+json')
    res.status(200).json({ data: stories })
  })
})

router.get('/:id', function(req, res) {
  db.getStory(req.params.id).then(story => {
    res.header('Content-Type', 'application/vnd.api+json')
    res.status(200).send(story)
  })
})

router.post('/', function(req, res) {
  db.createStory(req.body).then(id => {
    res.header('Content-Type', 'application/vnd.api+json')
    res.status(201).redirect(`/stories/${id}`)
  })
})

router.put('/:id', function(req, res) {
  db.updateStory(req.params.id).then(id => {
    res.header('Content-Type', 'application/vnd.api+json')
    res.status(202).json(id)
  })
})

router.delete('/:id', function(req, res) {
  db.deleteStory(req.params.id).then(id => {
    res.header('Content-Type', 'application/vnd.api+json')
    res.sendStatus(204).json(id)
  })
})

module.exports = router
