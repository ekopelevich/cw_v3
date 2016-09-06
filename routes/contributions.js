'use strict'

const express = require('express')
const router = express.Router({mergeParams: true})
const knex = require('../db/knex')
// const moment = require('moment')

router.get('/', function(req, res) {
  knex('contributions').select().where('story_id', req.params.id)
  .then(function(records){
    res.status(200).send({contributions: records})
  })
})

router.get('/:id', function(req, res) {
  knex('contributions').select().where('id', req.params.id).first()
  .then(function(record){
    res.status(200).send({contribution: record})
  })
})

router.post('/', function(req, res) {
  console.log(req.body)
  let contribution = {
    user_id: req.body.user_id,
    story_id: req.body.story_id,
    title: req.body.title,
    body: req.body.summary,
    // start_time: Date.now().moment().format(),
    status: 1,
  }
  console.log(contribution)

  knex('contributions').insert(contribution, 'id')
  .then(function(ids) {
    contribution.id = ids[0]
    res.status(201).send(contribution)
  })
})

router.put('/:id', function(req, res) {
  let contribution = {
    user_id: req.body.user_id,
    story_id: req.body.story_id,
    title: req.body.title,
    body: req.body.summary,
    // start_time: Date.now().moment().format(),
    status: 1,
  }

  knex('contributions').update(contribution).where('id', req.params.id)
  .then(function(){
    res.status(202).send(contribution)
  })
})

router.delete('/:id', function(req, res) {
  knex('contributions').del().where('id', req.params.id)
  .then(function(){
    res.sendStatus(204)
  })
})

module.exports = router
