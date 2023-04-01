const express = require('express');
const { signup,login } = require('../controllers/authController');
const { upload } = require('../middlewares/multer');
const router = express.Router();
router.post("/signup", upload.any(), signup);
router.post("/login", login);
// router.post("/signup", signup);
module.exports = router;