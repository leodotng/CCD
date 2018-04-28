var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', function (req, res, next) {
  db.getAllShiftPassDown()
    .then(shiftData => {
      res.render('index', {
        shiftData: shiftData
      });
    })
});

router.post('/', function (req, res, next) {
  db.addShiftPassDown(req.body)
    .then(shiftData => {
      res.render('index', {
        shiftData: shiftData
      });
    })
});

module.exports = router;