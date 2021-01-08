const mongoose = require("mongoose");

const PugSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  favFood: {
    type: String,
    required: true,
  },
  fav: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Pug = mongoose.model("Pug", PugSchema);

module.exports = Pug;
