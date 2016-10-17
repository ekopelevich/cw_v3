'use strict'

const express = require('express')
const router = express.Router({mergeParams: true})
const db = require('../db/chapters')

router.get('/', function(req, res) {
  console.log('CHAPTERRRRSSSS')
  db.getStoryChapters(req.params.storyId).then(stories => res.send({ data: stories }))
})

router.get('/:id', function(req, res) {
  db.getChapter(req.params.id).then(story => res.send(story))
})

router.post('/', function(req, res) {
  db.createChapter(req.body).then(idArray => res.status(201).send({id: idArray[0]}))
})

router.put('/:id', function(req, res) {
  db.updateChapter(req.params.id).then(id => res.send(id))
})

router.delete('/:id', function(req, res) {
  db.deleteChapter(req.params.id).then(id => res.send(id))
})

module.exports = router
