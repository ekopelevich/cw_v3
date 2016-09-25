'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/api')

router.get('/', function(req, res) {
  db.getAllChapters(req.params.id).then(chapters => {
    res.status(200).send(chapters)
  })
})

// router.get('/:id', function(req, res) {
//   db.getChapter(req.params.id).then(chapter => {
//     res.status(200).send(chapter)
//   })
// })
//
// router.post('/', function(req, res) {
//   db.createChapter(req.body).then(id => {
//     res.status(201).redirect(`/chapters/${id}`)
//   })
// })
//
// router.put('/:id', function(req, res) {
//   db.updateChapter(req.params.id).then(id => {
//     res.status(202).json(id)
//   })
// })
//
// router.delete('/:id', function(req, res) {
//   db.deleteChapter(req.params.id).then(id => {
//     res.sendStatus(204).json(id)
//   })
// })

module.exports = router
