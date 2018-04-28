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
    .then(shift => {
      res.redirect('/shiftpassdown')
      });
    });


module.exports = router;



// / Correctly posts


// criticalupdates
// gatechanges
// connections
// services
// late flights
// Shift Passdown