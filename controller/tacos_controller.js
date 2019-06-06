var express = require("express");

var router = express.Router();


var taco = require("../models/taco");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  taco.all(function(data) {
    var hbsObject = {
      tacos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/tacos", function(req, res) {
  taco.create([
    "name", "shell",
"vegeterian"  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
   
    res.json({ id: result.insertId });
  });
});

router.put("/api/tacos/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  taco.update({
    pick_up: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/tacos/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  taco.delete(condition, function(result) {
    if (result.affectedRows == 0) {
    
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
