const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: String,
    },
    onRent: {
        type: Boolean,
    },
    Images: {
        type: Array,
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;