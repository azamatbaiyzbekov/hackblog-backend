const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    join_date: {
        type: Date,
        default: Date.now,
    },
    place_of_birth: {
        type: String,
    },
    occupation: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: Boolean,
    default: false,
});

const User = mongoose.model('User', userSchema);

module.exports = User;