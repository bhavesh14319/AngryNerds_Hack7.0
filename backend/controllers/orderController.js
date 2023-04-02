const { sendSuccess } = require('../utils/apiResponse');
const Order = require('./../models/orderModel');

const pendingOrder = async (req, res) => {

    const pendingOrder = await Order.find({ "status": false }).populate('product_id', 'productName price Images owner_id').populate('seller_id','first_name last_name image');

    return sendSuccess(res, 200, 'Pending Order', pendingOrder);
}

const completedOrder = async (req, res) => {

    const completeOrder = await Order.find({ "status": true }).populate('product_id', 'productName price Images owner_id').populate('seller_id','first_name last_name image');

    return sendSuccess(res, 200, 'Pending Order', completeOrder);
}
module.exports = {pendingOrder,completedOrder}