const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

console.log(cloudinary.config());

const uploadImage = async (imagePath) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
    try {
        const result = await cloudinary.uploader.upload(imagePath, options);
        return result;
    } catch (error) {
        console.error(error);
    }
};

const getAssetInfo = async (publicId) => {
    const options = {
        colors: true,
    };
    try {
        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result.colors;
    } catch (error) {
        console.error(error);
    }
};

module.exports = { uploadImage, getAssetInfo }