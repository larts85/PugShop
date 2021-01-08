const express = require("express");
const router = express.Router();
const puggies = require("../db/pugs");

router.get("/asc", function (req, res, next) {
  const orederedPugs = puggies.puggies;
  const AtoB = orederedPugs.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  res.render("AtoB-pugs", {
    title: "PugShop",
    puggies: AtoB,
  });
});
router.get("/desc", function (req, res, next) {
  const orederedPugs = puggies.puggies;
  const BtoA = orederedPugs.sort(function (a, b) {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  });
  res.render("BtoA-pugs", {
    title: "PugShop",
    puggies: BtoA,
  });
});
module.exports = router;
