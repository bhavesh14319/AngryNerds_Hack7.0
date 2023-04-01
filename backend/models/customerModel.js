const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: ['true', 'Please enter the first name ']
    },
    last_name: {
        type: String,
        required: ['true', 'Please enter the last name']
    },
    aadhar_details: {
        type: Object,
        required: false
    },
    phone: {
        type: String,
        required: ['true', 'Please enter the last name']
    },

}, { timestamps: true })

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;