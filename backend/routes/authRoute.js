const express = require('express');
const { signup } = require('../controllers/authController');
// const { upload } = require('../middlewares/multer');
const router = express.Router();
router.post("/signup", upload.any(), signup);
module.exports = router;