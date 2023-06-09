const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    status: {
        type: Boolean,
        default: false
    }
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;