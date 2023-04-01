const express = require('express');
const router = express.Router();

const {getUnverifiedUsers,verifyUser} = require("../controllers/adminControllers");

router.get("/getUnverifiedUsers",getUnverifiedUsers);

router.post("/verifyUser",verifyUser);

module.exports = router;
