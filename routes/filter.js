const express = require("express");
const router = express.Router();
const puggies = require("../db/pugs");

router.get("/puppies", (req, res) => {
  const puppies = puggies.puggies.filter((p) => p.age < 0.5);
  console.log(puppies);
  res.render("puppies", {
    title: "PugShop",
    puppies: puppies,
  });
});

module.exports = router;
