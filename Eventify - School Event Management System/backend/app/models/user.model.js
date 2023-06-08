const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    joinedProtests: []
});

module.exports = mongoose.model('user', userSchema);
