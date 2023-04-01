const express = require('express');
const router = express.Router();
const authRoute = require('./authRoute');
const customerRoute = require('./customerRoute');
const productRoute = require("./productRoutes");
const adminRoute = require("./adminRoutes")


// const generalRoute = require('./generalRoute');
router.use("/api/user/v1", customerRoute);
router.use("/api/user/v1/auth", authRoute);
router.use("/api/products/v1",productRoute);
router.use("/api/admin/v1",adminRoute);

// router.use("/api/user/v1", generalRoute);
module.exports = router;