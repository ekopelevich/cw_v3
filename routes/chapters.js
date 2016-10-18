'use strict'

const express = require('express')
const router = express.Router({mergeParams: true})
const db = require('../db/chapters')

router.get('/', function(req, res) {
  db.getStoryChapters(req.params.id).then(chapters => res.send({ data: chapters }))
})

router.get('/:chapterId', function(req, res) {
  console.log(req.params.chapterId)
  db.getChapter(req.params.chapterId).then(story => {
    console.log(story)
    res.send(story)
  })
})

router.post('/', function(req, res) {
  console.log('post chapter route', req.body)
  db.createChapter(req.body).then(response => res.status(201).send({data: response}))
})

router.put('/:chapterId', function(req, res) {
  db.updateChapter(req.params.chapterId).then(id => res.send(id))
})

router.delete('/:chapterId', function(req, res) {
  db.deleteChapter(req.params.chapterId).then(id => res.send(id))
})

module.exports = router
