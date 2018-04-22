var express = require("express");
var router = express.Router();
const queries = require("./queries");

/* GET home page. */
router.get("/criticalupdates", function(req, res, next) {
  queries.getCriticalUpdates().then(function(criticalupdates) {
    res.redirect
  });
});

router.post('/', function(req, res, next) {
  queries.
})

module.exports = router;
