const express = require('express');
const router = express.Router();
const burgers = require('../models/burger.js');

// router.get('/', function(req,res) {
//   res.render('index');
// })

router.get("/", function(req, res) {
  burgers.all(function(data) {
    let hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});
module.exports = router;
