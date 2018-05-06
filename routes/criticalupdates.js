var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', function (req, res, next) {
  db.getAllCriticalUpdates()
    .then(critData => {
      res.render('index')
      });
    })


    router.post('/', function (req, res, next) {
      const crit = {details: req.body.details}
      db.addShiftPassDown(crit)
        .then(crit => {
          res.redirect('/')
          });
        })


module.exports = router;