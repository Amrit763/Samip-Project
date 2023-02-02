const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: String,

    password: {
        type: String,
    },
    email: {
        type: String,
        sparse: true,
        lowercase: true,
        // unique: true
    },

    image: {
        type: String,
        default: undefined
    },
    role: {
        type: String,
        enum: ['admin', 'normal'],
        default: 'normal'
    },
    message: String,
    subject: String
}, {
    timestamps: true
})

var userModel = mongoose.model('user', userSchema);
module.exports = userModel;