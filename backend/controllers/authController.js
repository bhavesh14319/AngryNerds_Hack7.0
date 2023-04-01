const axios = require('axios');
const Customer = require('../models/customerModel');
const Admin = require("../models/adminModel")
const path = require('path');
const fs = require('fs');
const FormData = require('form-data');
// const Credential = require('../models/credentialModel');
const catchAsync = require('../utils/catchAsync');
const { sendSuccess, sendError } = require('../utils/apiResponse');
const { uploadImage } = require('../utils/uploadImage');
// const { getToken } = require('../utils/getToken');

const multer = require("multer");

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log("file", file);
        callback(null, "./Uploads/");
    },
    filename: function (req, file, callback) {
        // console.log("multer file:", file);c
        callback(null, file.originalname);
    }
});
let maxSize = 1000000 * 1000;
let upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
});


const login = async (req,res)=>{
    const {username,password}=req.body;
    console.log(username);

    // const user = await Customer.find({aadhar_details: {no : {value : username}}});
    let user=null;
    user = await Customer.aggregate([
        {
            $match : {
                'aadhar_details.no.value':username
            }
        }
    ])
    console.log(user);
    if(user[0]==null){
       return sendError(res,400,'User Does Not Exist',{});
    }

    if(password == user[0].password){
        return sendSuccess(res,200,"Logged In Successfully", {user: user[0]});
    }
}




const signup = async (req, res, next) => {

    const { first_name, last_name, phone, isVerified, isSeller,password } = req.body;



    const imagePath = path.join(__dirname, `../uploads/image-${req.files[0].originalname}`)
    const data = await uploadImage(imagePath);
    console.log(path.join(__dirname, `../uploads/image-${req.files[0].originalname}`))



    console.log(req.files);

    // const File = req.files[0];

    const customer = new Customer({
        first_name: first_name,
        last_name: last_name,
        image: data.url,
        phone: phone,
        isVerified,
        isSeller,
        password
    });

    // await credential.save();



    try {
        const form = new FormData();
        form.append('files', fs.readFileSync(path.join(__dirname, `../uploads/image-${req.files[0].originalname}`)), path.join(__dirname, `../uploads/image-${req.files[0].originalname}`));


        const response = await axios.post(
            'https://nationalapi.docsumo.com/api/v1/national/extract/',
            form,
            {
                params: {
                    'side': 'front',
                    'save_data': 'false',
                    'return_redacted': 'false',
                    'fraud_check': 'true'
                },
                headers: {
                    ...form.getHeaders(),
                    'X-API-KEY': 'p5IkaQu1HBLpkbu7iEFZQnIubUOKEzlf4x9ioycjpr0JIQsZqSB2xEpLS9h8'
                }
            }
        );

        if (response) {
            console.log(response.data);
            customer.aadhar_details=response.data.data;

        }
    } catch (error) {
        console.log(error);
    }



    await customer.save();





    const finalResponse = {
        // credential,
        customer,
        // token
    }

    return sendSuccess(res, 200, "Signup Successfully", finalResponse);
};
module.exports = { signup ,login};