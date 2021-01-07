const express = require("express");
const router = express.Router();
const puggies = require("../db/pugs");
console.log(puggies.puggies);

router.get("/", function (req, res, next) {
  res.render("pugs", {
    puggies: puggies.puggies,
  });
});

module.exports = router;
