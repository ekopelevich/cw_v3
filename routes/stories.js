'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/api')
const chapters = require('./chapters')

router.use('/:id/chapters', chapters)

router.get('/', function(req, res) {
  db.getAllStories().then(stories => {
    res.status(200).send(stories)
  })
})

router.get('/:id', function(req, res) {
  db.getStory(req.params.id).then(story => {
    res.status(200).send(story)
  })
})

router.post('/', function(req, res) {
  db.createStory(req.body).then(id => {
    res.status(201).redirect(`/stories/${id}`)
  })
})

router.put('/:id', function(req, res) {
  db.updateStory(req.params.id).then(id => {
    res.status(202).json(id)
  })
})

router.delete('/:id', function(req, res) {
  db.deleteStory(req.params.id).then(id => {
    res.sendStatus(204).json(id)
  })
})

module.exports = router
