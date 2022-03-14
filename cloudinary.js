const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret:  CLOUDINARY_API_SECRET,
    secure: true
})

module.exports = cloudinary