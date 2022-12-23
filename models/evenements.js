const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var evenementSchema = new Schema({
  title: String,
  lieu: String,
  cover: String,
  type: String,
  prix: Number,
  date: String,
  heure: String,
});

module.exports = mongoose.model("Evenement", evenementSchema);
