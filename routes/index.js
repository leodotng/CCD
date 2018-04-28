var express = require('express');
var router = express.Router();
var db = require('../queries');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home Page'
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