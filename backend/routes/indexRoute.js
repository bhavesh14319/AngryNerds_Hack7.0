const express = require('express');
const router = express.Router();
const authRoute = require('./authRoute');
const customerRoute = require('./customerRoute');
// const generalRoute = require('./generalRoute');
router.use("/api/user/v1", customerRoute);
router.use("/api/user/v1/auth", authRoute);
// router.use("/api/user/v1", generalRoute);
module.exports = router;