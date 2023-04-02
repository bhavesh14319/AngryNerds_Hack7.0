const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    image: {
        type: String
    },
    phone: {
        type: String,
    },
    email:{
        type:String,
    },
    unverifiedUsers:{
        type:[mongoose.Schema.Types.ObjectId]
    },
    sellerRequests:{
        type:[{}],
    },

    ordersQueue:{
        type:[mongoose.Schema.Types.ObjectId]
    }
});

const Admin = mongoose.model('Admin',adminSchema );
module.exports = Admin;