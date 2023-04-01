const Product = require("../models/producModel");
const { sendSuccess, sendError } = require('../utils/apiResponse');


const showAllProducts = async(req,res)=>{
    const products =await Product.find();


    return sendSuccess(res, 200, "Fetched All Products", {products});
}


const showProductsForRent = async (req,res)=>{
    const products = await Product.find({
        onRent:true
    });

    return sendSuccess(res, 200, "Fetched All Products For Rent", {products});
}


const showSellProdcuts = async (req,res)=>{
    const products = await Product.find({onRent:false});
    return sendSuccess(res, 200, "Fetched All Products For Sell", {products});

}
module.exports= {showAllProducts, showProductsForRent,showSellProdcuts};