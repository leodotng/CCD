var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/', function(req, res, next) {
  db.getCriticalUpdates()
  .then(criticalupdates => {
    res.render('criticalupdates', {
      criticalupdates: criticalupdates
    });
  });
})

// router.post('/', function(req, res, next) {
//   db.('criticalupdates').insert({details: req.body.details}).then(function() {
//     res.redirect('/');
//   })
// })



module.exports = router;
