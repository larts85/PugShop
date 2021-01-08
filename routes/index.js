const express = require("express");
const router = express.Router();
const Pug = require("../models/pugs");

router.get("/", async (req, res, next) => {
  const pugs = await Pug.find();
  res.render("index", {
    title: "PugShop",
    puggies: pugs,
  });
});

module.exports = router;
