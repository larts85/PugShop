const express = require("express");
const router = express.Router();

router.get("/user", function (req, res, next) {
  res.render("user", { a: "respond with a resource" });
});

module.exports = router;
