const Product = require("../models/producModel");
const Order = require("../models/orderModel");
const { sendSuccess, sendError } = require('../utils/apiResponse');
const path = require('path');
const { uploadImage } = require('../utils/uploadImage');

// function uploadImages(file) {
//     console.log(
//         "file---------", file);
//     var imagePath = file.path
//     const form = new FormData();
//     const stats = fs.statSync(imagePath);
//     const file2 = fs.createReadStream(imagePath);
//     form.append('file_image', file2, { knownLength: stats.size });
//     form.append('API_KEY', 'rXTmeXCzKFMlzHZEJS4hXXb51ZAfQ8Ds');
//     form.append('task', 'porn_moderation,drug_moderation,gore_moderation,drug_moderation');
//     form.append('origin_id', "xxxxxxxxx");
//     form.append('reference_id', "yyyyyyyy");

//     fetch(picpurifyUrl, {
//         method: 'POST',
//         body: form
//     }).then((response) => {
//         return response.json();
//     }).then((json) => {
//         console.log(json);
//     }).catch((error) => {
//         console.log(error.message);
//     })

//     cloudinary.config({
//         cloud_name: "dr07lzbug",
//         api_key: "699398384514582",
//         api_secret: "nqN1O0PA5W6BR7iBLX24_D0d5hU"
//     });

//     return new Q.Promise((resolve, reject) => {
//         cloudinary.v2.uploader.upload(file.path, { public_id: `${file.photoGrapherId}/${file.type == "random" ? file.type : file.category}/${file.filename}` }, (err, res) => {
//             if (err) {
//                 console.log('cloudinary err:', err);
//                 reject(err);
//             } else {
//                 console.log('cloudinary res:', res);
//                 return resolve(res.url);
//             }
//         });
//     });
// };

const addProduct = async (req, res, next) => {
    const { productName, category, price, onRent, ownerId } = req.body;

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
            ownerId,
            Images: urls
        })
        await product.save();
        return sendSuccess(res, 200, "Product Added Successfully", { product });
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

};

module.exports = { addProduct, createOrder };