const mongoose = require('mongoose');

const substringSchema = new mongoose.Schema({
    s: String,
    words: [String],
    positions: [Number]
});

const Substring = mongoose.model('Substring', substringSchema);

module.exports = Substring;