const Customer = require('../models/customerModel');
const Admin = require("../models/adminModel");
const { sendSuccess, sendError } = require('../utils/apiResponse');

const getUnverifiedUsers = async (req, res) => {
    let users = await Customer.find({ isVerified: false });
    users = JSON.parse(JSON.stringify(users));

    let unverified = [];
    users.map((user) => {
        unverified.push(user._id);
    })

    console.log(unverified);

    let admin = await Admin.find();
    admin[0].unverifiedUsers = unverified;



    let updatedAdmin = await Admin.findByIdAndUpdate(admin[0]._id, {
        unverifiedUsers: admin[0].unverifiedUsers

    }, { new: true });

    return sendSuccess(res, 200, "Unverified Users", { users, updatedAdmin });

}


const verifyUser = async (req, res) => {
    const { customer_id, admin_id } = req.body;
    let user = await Customer.findById({ _id: customer_id });

    user = JSON.parse(JSON.stringify(user));

    user.isVerified = true;

    updatedUser = await Customer.findByIdAndUpdate(user._id, {
        isVerified: user.isVerified

    }, { new: true });


    let admin = await Admin.findById({ _id: admin_id });
    admin = JSON.parse(JSON.stringify(admin));

    admin.unverifiedUsers = admin.unverifiedUsers.filter((id) => id != customer_id);


    updateAdmin = await Admin.findByIdAndUpdate(admin_id, {
        unverifiedUsers: admin.unverifiedUsers

    }, { new: true });


    return sendSuccess(res, 200, "Signup Successfully", { user: updatedUser, admin: updateAdmin });

}


const verifySeller = async (req, res) => {
    const { customer_id } = req.body;

    let admin = await Admin.find();

    let user;



    const requests = admin[0].sellerRequests.map(async (id) => {
        console.log(id)
        if (id == customer_id) {
            user = await Customer.findById(id);
        }
    })

   
    Promise.all(requests).then(async () => {
        console.log(user)
        user.isSeller=true;


        let updatedUser = await Customer.findByIdAndUpdate(user._id, {
            isSeller: user.isSeller
    
        }, { new: true });


        admin[0].sellerRequests = admin[0].sellerRequests.filter((id)=>id!=user._id);

        let updatedAdmin = await Admin.findByIdAndUpdate(admin[0]._id,{
            sellerRequests:admin[0].sellerRequests
        })

        



        return sendSuccess(res, 200, "Product Added Successfully", { admin: updatedAdmin,customer: updatedUser });
    })


}


const getSellerRequests = async (req, res) => {
    let admin = await Admin.find();

  
    let users = [];
    const requests = admin[0].sellerRequests.map(async(id) => {
        let user = await Customer.findById({_id:id});
        users.push(user);
    })

    
    Promise.all(requests).then(async () => {

        return sendSuccess(res, 200, "User wanting to sell", { users });

    })
   







   

}


module.exports = { getUnverifiedUsers, verifyUser,verifySeller,getSellerRequests };