var express = require('express');
var router = express.Router();
var db = require('../queries');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET Critical Updates and display them */

router.get("/criticalupdates", function(req, res, next) {
  db.getAllCriticalUpdates().then(criticalupdates => {
    res.render("index", {
      criticalupdates: criticalupdates
    });
  });
});

// This correctly posts into database!!!
router.post('/addcriticalupdates', function(req, res, next) {
  db.addCriticalUpdates(req.body)
  .then(data => {
    res.redirect('/');
  });
});
// Correctly posts






// router.get('/oneCriticalUpdate/:id'), (req, res) => {
//   var id = req.params.id
//   db.getOneCriticalUpdate(id)
//   .then(oneCriticalUpdate => {
//     res.render('index', {
//       criticalupdates: oneCriticalUpdate
//     })
//   })
// }



// criticalupdates
// gatechanges
// connections
// services
// late flights
// Shift Passdown







// router.post('/', function(req, res, next) {
//   db('criticalupdates').insert({
//     details: req.body.details
//   })
//   .then(function() {
//     res.redirect('/')
//   })


// router.post('/', function(req, res, next) {
//   db.addCriticalUpdates(req.body)
//   .then(newDetails => {
//     console.log(newDetails)
//     res.redirect('/')
//   });
// });

module.exports = router;
