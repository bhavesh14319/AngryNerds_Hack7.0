const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:String,
    category:String,
    price:Number,
    onRent:Boolean,
    Images:Array,
    ownerId:String,
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;