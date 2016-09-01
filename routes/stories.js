'use strict'

const express = require('express')
const router = express.Router()
const knex = require('../db/knex')
const moment = require('moment')
const contributions = require('./contributions')

router.get('/', function(req, res) {
  knex('stories').select().then(function(records){
    res.status(200).send({stories: records})
  })
})

router.get('/:id', function(req, res) {
  knex('stories').select().where('id', req.params.id).first()
  .then(function(record){
    res.status(200).send({story: record})
  })
})

router.post('/', function(req, res) {
  console.log(req.body)
  let user = 1
  let story = {
    user_id: user,
    title: req.body.title,
    start_date: moment().format(),
    summary: req.body.summary,
    edit_lock: 0,
    genre_id: req.body.genre,
    checkout_time: moment().format(),
    state_id: 1,
  }

  knex('stories').insert(story, 'id')
  .then(function(ids) {
    story.id = ids[0]
    res.status(201).send(story)
  })
})

router.put('/:id', function(req, res) {
  let user = 1
  let story = {
    user_id: user,
    title: req.body.title,
    start_date: moment().format(),
    summary: req.body.summary,
    edit_lock: 0,
    genre_id: req.body.genre,
    checkout_time: moment().format(),
    state_id: 1,
  }

  knex('stories').update(story).where('id', req.params.id)
  .then(function(){
    res.status(202).send(story)
  })
})

router.delete('/:id', function(req, res) {
  knex('stories').del().where('id', req.params.id)
  .then(function(){
    res.sendStatus(204)
  })
})

router.use('/contributions', contributions)

module.exports = router
