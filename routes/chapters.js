'use strict'

const express = require('express')
const router = express.Router({mergeParams: true})
const db = require('../db/chapters')
// const moment = require('moment')

router.get('/', function(req, res) {
  db.getStoryChapters(req.params.id).then(chapters => res.send({ data: chapters }))
})

// router.get('/pending', function(req, res) {
//   console.log('this is the pending route', req.query.id, req.query.type)
//   db.getPendingChapters(req.query.id, req.query.type).then(chapters => {
//     console.log('chapters', chapters)
//     res.send(chapters)
//   })
// })

router.get('/:chapterId', function(req, res) {
  db.getChapter(req.params.chapterId).then(story => res.status(200).send(story))
})

router.post('/', function(req, res) {
  const newChapter = {
    user_id: req.body.user_id,
    story_id: req.body.story_id,
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
    state_id: 2,
  }
  db.createChapter(newChapter).then(response => {
    res.status(201).send({id: response[0]})
  })
})

router.put('/:chapterId', function(req, res) {
  db.updateChapter(req.params.chapterId).then(id => res.send(id))
})

router.delete('/:chapterId', function(req, res) {
  db.deleteChapter(req.params.chapterId).then(id => res.status(200).send({id: id}))
})

module.exports = router
