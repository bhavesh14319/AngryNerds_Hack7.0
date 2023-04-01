const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: ['true', 'Please enter the first name ']
    },
    last_name: {
        type: String,
        required: ['true', 'Please enter the last name']
    },
    // image: {
    //     type: String,
    //     default: ""
    // },
    phone: {
        type: "String",
        required: ['true', 'Please enter the last name']
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema);
module.exports = User;