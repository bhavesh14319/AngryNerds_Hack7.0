const User = require('../models/userModel');
const path = require('path');
// const Credential = require('../models/credentialModel');
const catchAsync = require('../utils/catchAsync');
const { sendSuccess, sendError } = require('../utils/apiResponse');
// const { uploadImage } = require('../utils/uploadImage');
// const { getToken } = require('../utils/getToken');

const signup = async (req, res, next) => {

    const { first_name, last_name, phone } = req.body

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


    // const imagePath = path.join(__dirname, `../uploads/image-${req.files[0].originalname}`)
    // const data = await uploadImage(imagePath);

    const user = new User({
        first_name: first_name,
        last_name: last_name,
        phone: phone,
    });

    // await credential.save();
    await user.save();



    // const token = getToken(credential, user);

    const finalResponse = {
        // credential,
        user,
        // token
    }

    return sendSuccess(res, 200, "Signup Successfully", finalResponse);
};
module.exports = { signup };