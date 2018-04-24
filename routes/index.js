var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

router.get('/', function(req, res, next) {
  db.getAllCriticalUpdates()
  .then(criticalupdates => {
    res.render('index', {
      criticalupdates: criticalupdates
    });
  });
});

router.post('/', function(req, res, next) {
  db.addCriticalUpdates(req.body)
  .then(newDetails => {
    console.log(newDetails)
    res.redirect('/')
  })
})



module.exports = router;
