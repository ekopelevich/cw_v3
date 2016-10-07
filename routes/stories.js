'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/api')

router.get('/', function(req, res) {
  console.log('here')
  // console.log(req.body)
  db.getAllStories().then(stories => {
    //res.header('Content-Type', 'application/vnd.api+json')
    // res.status(200).json({ data: stories })
    // .status(200).json({
    //   "data": {
    //     "type": "articles",
    //     "id": "1"
    //   }
    // })
    res.json({
      data: {
        type: 'story',
        id: 1,
        attributes: {
          parent_id: 1,
          genre_id: 1,
          title: 'Cats',
          summary: 'cool stuff',
          cover: '123',
          isLocked: false,
          isActive: true,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      },
    })
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
