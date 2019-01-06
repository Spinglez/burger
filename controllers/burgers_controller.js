const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
  res.render('index');
})

// router.get('/add', function(req,res) {
//   app.
// });
// Leaving a switch statment here for use later.
// switch (expression) {
//   case expression:
//
//     break;
//   default:
//
// }

module.exports = router;
