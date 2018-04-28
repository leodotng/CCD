var express = require('express');
var router = express.Router();
var db = require('../queries');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home Page'
  });
});

/* GET Critical Updates and display them */

router.get('/', function(req, res, next) {
  db.getAllCriticalUpdates()
  .then(criticalupdates => {
    res.render('picnic', {
      criticalupdates: criticalupdates
    });
  });
});

router.get("/criticalupdates", function(req, res, next) {
  db.getAllCriticalUpdates().then(criticalupdates => {
    res.render("index", {
      criticalupdates: criticalupdates
    });
  });
});

// This correctly posts into database!!!
router.post('/addcriticalupdates', function (req, res, next) {
  db.addCriticalUpdates(req.body)
    .then(data => {
      res.render('picnic')
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