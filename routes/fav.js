const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("fav", {
    fav: "fav puggies",
  });
});

module.exports = router;
