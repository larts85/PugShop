const express = require("express");
const router = express.Router();
const puggies = require("../db/pugs");
const Pug = require("../models/pugs");

/* GET home page. */
router.get("/", async (req, res, next) => {
  // console.log("req", req);
  const pugs = await Pug.find();
  res.render("index", {
    title: "PugShop",
    puggies: pugs,
  });
});

module.exports = router;
