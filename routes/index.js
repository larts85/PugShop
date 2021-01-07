const express = require("express");
const router = express.Router();
const puggies = require("../db/pugs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "PugShop",
    puggies: puggies.puggies,
  });
});

module.exports = router;
