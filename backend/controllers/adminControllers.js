const Customer = require('../models/customerModel');
const Admin = require("../models/adminModel");
const { sendSuccess, sendError } = require('../utils/apiResponse');

const getUnverifiedUsers = async (req, res) => {
    let users = await Customer.find({ isVerified:false });
    users = JSON.parse(JSON.stringify(users));

    let unverifiedUsers = [];
    users.map((user)=>{
            unverifiedUsers.push(user._id);
    })

    let admin = await Admin.find();
    console.log(admin);
    return sendSuccess(res, 200, "Unverified Users", { users });

}


const verifyUser = async (req, res) => {
    const { customer_id,admin_id } = req.body;
    let user = await Customer.findById({ _id: customer_id });

    user = JSON.parse(JSON.stringify(user));

    user.isVerfied = true;

    updatedUser = await Customer.findByIdAndUpdate(customer_id, {
        isVerfied: user.isVerfied

    }, { new: true });


    const admin = await Admin.findById({ _id: admin_id });
    admin = JSON.parse(JSON.stringify(admin));
    
    admin.unverifiedUsers=admin.unverifiedUsers.filter((id)=>id!=customer_id);


    updateAdmin = await Admin.findByIdAndUpdate(admin_id, {
        unverifiedUser : admin.unverifiedUsers

    }, { new: true });


    return sendSuccess(res, 200, "Signup Successfully", {user:updatedUser,admin:updateAdmin});

}


module.exports = { getUnverifiedUsers, verifyUser };