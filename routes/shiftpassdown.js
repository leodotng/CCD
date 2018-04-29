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
  const shift = {details: req.body.details}
  db.addShiftPassDown(shift)
    .then(shift => {
      res.redirect('/')
      })
    })


module.exports = router;