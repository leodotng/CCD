var express = require('express');
var router = express.Router();
var db = require('../queries');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET Critical Updates and display them */

// router.get('/', function(req, res, next) {
//   db.getAllCriticalUpdates()
//   .then(data => {
//     res.redirect('/');
//     });
//   });

// This correctly posts into database!!!
router.post('/addcriticalupdates', function(req, res, next) {
  db.addCriticalUpdates(req.body)
  .then(data => {
    res.redirect('/');
  });
});
// Correctly posts


// criticalupdates
// gatechanges
// connections
// services
// late flights
// Shift Passdown

router.post('/addshiftpassdown', function(req, res, next) {
  db.addShiftPassdown(req.body)
  .then(shift => {
    res.redirect('/');
  });
});

module.exports = router;
