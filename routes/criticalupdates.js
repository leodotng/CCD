var express = require("express");
var router = express.Router();
var db = require("../queries");

/* GET home page. */
router.get("/criticalupdates", function(req, res, next) {
  db.getAllCriticalUpdates().then(criticalupdates => {
    res.render("picnic", picnic)
  });
});

// router.post('/', function(req, res, next) {
//   db.addCriticalUpdates(req.body)
//   .then(newDetails => {
//     console.log(newDetails)
//     res.redirect('/')
//   })
// })

module.exports = router;