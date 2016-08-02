var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  knex('users').select().then(function(records){
    res.status(200).send({users: records});
  });
});

router.get('/:id', function(req, res, next) {
  knex('users').select().where('id', req.params.id).first()
  .then(function(record){
    res.status(200).send({story: record});
  });
});

router.post('/', function(req, res, next) {
  var user = 1;
  var story = {
    user: user,
    title: req.body.story.title,
    start_date: moment().format(),
    summary: req.body.story.summary,
    edit_lock: 0,
    genre_id: req.body.story.genre,
    checkout_time: moment().format(),
    state_id: 1
  };

  knex('users').insert(story, 'id')
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

  knex('users').update(story).where('id', req.params.id)
  .then(function(){
    res.status(202).send(story);
  });
});

router.delete('/:id', function(req, res, next) {
  knex('users').del().where('id', req.params.id)
  .then(function(){
    res.sendStatus(204);
  });
});

module.exports = router;
