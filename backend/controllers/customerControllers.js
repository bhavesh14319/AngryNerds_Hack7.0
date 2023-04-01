const Product = require("../models/producModel");
const Order = require("../models/orderModel");
const Customer = require('../models/customerModel');
const { sendSuccess, sendError } = require('../utils/apiResponse');
const path = require('path');
const { uploadImage } = require('../utils/uploadImage');

const addProduct =async (req,res)=>{
    const {productName,category,price,onRent,owner_id,isVerified}=req.body;


    // upload images to cloudinary and get links and add it in array

    let urls = [];

    const requests = req.files?.map(async (file, index) => {
        const imagePath = path.join(__dirname, `../uploads/image-${req.files[index].originalname}`);
        const data = await uploadImage(imagePath);
        console.log(data);
        if (data.url) {
            urls.push(data.url);
        }

    })

    Promise.all(requests).then(async () => {
        const product = new Product({
            productName,
            category,
            price,
            onRent,
            owner_id,
            Images: urls
        })
        await product.save();

        let customer = await Customer.findOne({_id:owner_id});
        customer = JSON.parse(JSON.stringify(customer));

        let updatedCustomer
        console.log(typeof(onRent));
        if(onRent==="true"){
            customer.rentProducts.push(product._id);
            updatedCustomer = await Customer.findByIdAndUpdate(owner_id,{
                rentProducts: customer.rentProducts
            
    },{new:true});
        }else{
            customer.sellProducts.push(product._id);
            updatedCustomer = await Customer.findByIdAndUpdate(owner_id,{ 
                sellProducts: customer.sellProducts
            
    },{new:true});
        }   

        // console.log(customer);

        // console.log(owner_id)


       

        return sendSuccess(res, 200, "Product Added Successfully", {product , updatedCustomer});
    })
}


const createOrder = async (req, res, next) => {
    const { seller_id, buyer_id, product_id } = req.body;
    const order = new Order({
        seller_id: seller_id,
        buyer_id: buyer_id,
        product_id: product_id
    });
    await order.save();
    const finalResponse = {
        order: order
    }
    return sendSuccess(res, 200, "Order Created", finalResponse);
};

const getAllBuyOrder = async (req, res, next) => {
    const { buyer_id } = req.body;
    const orders = await Order.find({
        'buyer_id': buyer_id
    }).populate('product_id', 'productName category price onRent Images owner_id');
    const finalResponse = {
        orders: orders
    }
    return sendSuccess(res, 200, "All Buy Order", finalResponse);
};

const getAllSellOrder = async () => {
    const { seller_id } = req.body;
    const orders = Order.find({
        seller_id: seller_id
    }).populate('product_id', 'productName category price onRent Images owner_id');;
    const finalResponse = {
        orders: orders
    }
    return sendSuccess(res, 200, "All Sell Order", finalResponse);
};
module.exports = { addProduct, createOrder, getAllBuyOrder, getAllSellOrder };