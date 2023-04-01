const axios = require('axios');
const Customer = require('../models/customerModel');
const path = require('path');
const fs = require('fs');
// const Credential = require('../models/credentialModel');
const catchAsync = require('../utils/catchAsync');
const { sendSuccess, sendError } = require('../utils/apiResponse');
const { uploadImage } = require('../utils/uploadImage');
// const { getToken } = require('../utils/getToken');

const signup = async (req, res, next) => {

    const { first_name, last_name, phone } = req.body;

    // const login = await Credential.findOne({ "phone": phone, "email": email });
    // const userExist = await User.findOne({ "user_id": login?._id });
    // if (userExist) {
    //     const credential = {
    //         phone: phone,
    //         email: email
    //     }
    //     const token = getToken(credential, userExist);
    //     const finalResponse = {
    //         credential,
    //         user: userExist,
    //         token
    //     }
    //     return sendSuccess(res, 200, 'Login Successfully', finalResponse);
    // }

    // const credential = new Credential({
    //     phone: phone,
    //     email: email
    // });


    const imagePath = path.join(__dirname, `../uploads/image-${req.files[0].originalname}`)

    const data = await uploadImage(imagePath);

    // console.log(req.files);

    // const File = req.files[0];

    const customer = new Customer({
        first_name: first_name,
        last_name: last_name,
        image: data.url,
        phone: phone,
    });

    // await credential.save();
    await customer.save();


    // let headersList = {
    //     "Accept": "/",
    //     // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    //     "X-API-KEY": "p5IkaQu1HBLpkbu7iEFZQnIubUOKEzlf4x9ioycjpr0JIQsZqSB2xEpLS9h8"
    // }

    // let body = req.files[0];

    // let reqOptions = {
    //     url: "https://nationalapi.docsumo.com/api/v1/national/extract/?side=back&save_data=false&return_redacted=false&fraud_check=true",
    //     method: "POST",
    //     headers: headersList,
    //     data: body,
    // }

    // let response = await axios.request(reqOptions);
    // console.log(response.data);



    // console.log(req.files);

    // const token = getToken(credential, user);

    const finalResponse = {
        // credential,
        customer,
        // token
    }

    return sendSuccess(res, 200, "Signup Successfully", finalResponse);
};
module.exports = { signup };