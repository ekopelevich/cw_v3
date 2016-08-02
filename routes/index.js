var express = require('express');
var router = express.Router();

var stories = require('./stories');

router.get('/', function(req, res, next) {
  res.send('index');
});

router.use('/stories', stories);

module.exports = router;
