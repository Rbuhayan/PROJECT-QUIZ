const mongoose = require('mongoose');

// Define a Mongoose Schema and Model for a sample entity (e.g., User)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
