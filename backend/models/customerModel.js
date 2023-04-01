const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    aadhar_details: {
        type: Object,
    },
    image: {
        type: String
    },
    phone: {
        type: String,
    },

}, { timestamps: true })

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;