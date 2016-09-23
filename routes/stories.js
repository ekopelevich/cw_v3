'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/api')
const moment = require('moment')
const contributions = require('./contributions')

router.use('/contributions', contributions)

router.get('/', function(req, res) {
  db.getAllStories().then(function(records){
    res.status(200).json({stories: records})
  })
})

router.get('/:id', function(req, res) {
  db.getStory(req.params.id).then(function(record){
    res.status(200).send({story: record})
  })
})

router.post('/', function(req, res) {
  db.createStory(req.body).then(function(id) {
    res.status(201).redirect(`/stories/${id}`)
  })
})

router.put('/:id', function(req, res) {
  db.updateStory(req.params.id).then(function(id){
    res.status(202).json(id)
  })
})

router.delete('/:id', function(req, res) {
  db.deleteStory(req.params.id).then(function(id){
    res.sendStatus(204).json(id)
  })
})

module.exports = router
