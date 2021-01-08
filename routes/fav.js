const express = require("express");
const router = express.Router();
const Pug = require("../models/pugs");

router.get("/", async (req, res, next) => {
  const pugs = await Pug.find({
    fav: true,
  });
  res.render("fav", {
    fav: pugs,
  });
});
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const pug = await Pug.findById(id);
  pug.fav = !pug.fav;
  await pug.save();
});

module.exports = router;
