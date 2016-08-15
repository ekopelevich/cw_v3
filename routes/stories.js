var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
var moment = require('moment');

router.get('/', function(req, res, next) {
  knex('stories').select().then(function(records){
    res.status(200).send({stories: records});
  });
});

router.get('/:id', function(req, res, next) {
  knex('stories').select().where('id', req.params.id).first()
  .then(function(record){
    res.status(200).send({story: record});
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var user = 1;
  var story = {
    user_id: user,
    title: req.body.title,
    start_date: moment().format(),
    summary: req.body.summary,
    edit_lock: 0,
    genre_id: req.body.genre,
    checkout_time: moment().format(),
    state_id: 1
  };

  knex('stories').insert(story, 'id')
  .then(function(ids) {
    story.id = ids[0];
    res.status(201).send(story);
  });
});

router.put('/:id', function(req, res, next) {
  var user = 1;
  var story = {
    user_id: user,
    title: req.body.title,
    start_date: moment().format(),
    summary: req.body.summary,
    edit_lock: 0,
    genre_id: req.body.genre,
    checkout_time: moment().format(),
    state_id: 1
  };

  knex('stories').update(story).where('id', req.params.id)
  .then(function(){
    res.status(202).send(story);
  });
});

router.delete('/:id', function(req, res, next) {
  knex('stories').del().where('id', req.params.id)
  .then(function(){
    res.sendStatus(204);
  });
});

// router.get('/:id/contributions', function(req, res, next) {
//   knex.select().from('contributions')
//     .where('id', req.params.id)
//     .then(function(data){
//       res.json(data);
//     });
// });
//
// router.get('/:id/contributions/:contribution_id', function(req, res, next) {
//   knex.select().from('stories')
//   .join('stories', 'contributions.id', 'story.id')
//   .where('stories.id', req.params.id)
//   .andWhere('contributions.id', req.params.contribution_id)
//   .then(function(data){
//     res.json(data);
//   });
// });

module.exports = router;
