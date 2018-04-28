var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/shiftpassdown', function (req, res, next) {
  db.getAllShiftPassDown()
    .then(shiftData => {
      res.render('index')
      });
    })


router.post('/shiftpassdown', function (req, res, next) {
  db.addShiftPassDown(req.body)
    .then(Data => {
      res.render('index')
      });
    })


module.exports = router;