var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', function (req, res, next) {
  db.getAllCriticalUpdates()
    .then(shiftData => {
      res.render('index')
      });
    })


router.post('/addcriticalupdates', function (req, res, next) {
  db.addCriticalUpdates(req.body)
    .then(Data => {
      res.render('index')
      });
    })


module.exports = router;