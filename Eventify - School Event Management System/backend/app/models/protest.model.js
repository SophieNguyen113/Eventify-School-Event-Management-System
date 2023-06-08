const mongoose = require('mongoose')

const protestSchema = mongoose.Schema({
    name: {type: String, require: true},
    date: {type: String, require: true},
    location: {type: String, require: true},
    time: {type: String, require: true},
    purpose: String
});

module.exports = mongoose.model('protest', protestSchema);