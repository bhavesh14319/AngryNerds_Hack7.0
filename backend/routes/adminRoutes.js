const express = require('express');
const router = express.Router();

const {getUnverifiedUsers,verifyUser,verifySeller, getSellerRequests} = require("../controllers/adminControllers");

router.get("/getUnverifiedUsers",getUnverifiedUsers);

router.post("/verifyUser",verifyUser);
router.post("/verifySeller",verifySeller);
router.get("/getSellerRequests",getSellerRequests);

module.exports = router;
