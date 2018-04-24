var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getAllCriticalUpdates()
  .then(data => res.render('index', {
    data:data
  }))
});


module.exports = router;
