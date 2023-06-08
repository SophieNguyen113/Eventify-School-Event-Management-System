const mongoose = require('mongoose');

const sampleSchema = mongoose.Schema({
    title: String,
    name: String
});

module.exports = mongoose.model('sample', sampleSchema);
