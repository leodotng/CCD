var express = require("express");
var router = express.Router();
var db = require("../queries");

/* GET home page. */
router.get("/criticalupdates", function(req, res, next) {
  db.getAllCriticalUpdates().then(criticalupdates => {
    res.render("index", {
      criticalupdates: criticalupdates
    });
  });
});

module.exports = router;
