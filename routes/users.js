var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('users').select().then(function(records){
    res.status(200).send({users: records});
  });
});

router.get('/:id', function(req, res, next) {
  knex('users').select().where('id', req.params.id).first()
  .then(function(record){
    res.status(200).send({user: record});
  });
});

router.post('/', function(req, res, next) {
  var user = {
    first_name:req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    location: req.body.location,
    gender_id: req.body.gender_id
  };

  knex('users').insert(user, 'id')
  .then(function(ids) {
    user.id = ids[0];
    res.status(201).send(user);
  });
});

router.put('/:id', function(req, res, next) {
  var user = {
    first_name:req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    location: req.body.location,
    gender_id: req.body.gender_id
  };

  knex('users').update(user).where('id', req.params.id)
  .then(function(){
    res.status(202).send(user);
  });
});

router.delete('/:id', function(req, res, next) {
  knex('users').del().where('id', req.params.id)
  .then(function(){
    res.sendStatus(204);
  });
});

module.exports = router;
