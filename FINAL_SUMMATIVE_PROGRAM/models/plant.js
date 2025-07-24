const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: String,
    light: String,
    water: String,
    image: String // path to pokemon-inspired image
});

module.exports = mongoose.model('Plant', plantSchema);
