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

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  db.getSingleShiftPassDown(id)
  .then(singleShiftPassDown => {
    singleShiftPassDown = singleShiftPassDown[0]
    res.render('index')
  }) 
})


router.post('/', function (req, res, next) {
  const shift = {details: req.body.details}
  db.addShiftPassDown(shift)
    .then(shiftData => {
      res.redirect('/')
      });
    })



module.exports = router;