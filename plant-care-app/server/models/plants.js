const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  light: { type: String, enum: ["direct", "indirect", "low"], required: true },
  waterFrequency: { type: String, required: true },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
