const express = require('express');
const {addProduct, createOrder, getAllBuyOrder, getAllSellOrder} = require('../controllers/customerControllers')
// const { followUser, allFollower, profile, me, friends } = require('../controllers/userController');
// const globalAccess = require('../middlewares/auth');
// const globalAccess = require('../middlewares/auth');
const { upload } = require('../middlewares/multer');
const router = express.Router();



router.post("/addProduct", upload.any(), addProduct);
router.post("/createOrder", createOrder);
router.post("/getAllBuyOrder", getAllBuyOrder);
router.post("/getAllSellOrder", getAllSellOrder);

// router.post("/follow/:id", globalAccess, followUser);
// router.get("/allFollower", globalAccess, allFollower);
// router.get("/me/:id", globalAccess, me);
// router.get("/profile/:id", globalAccess, profile);
// router.get("/friends", globalAccess, friends);
module.exports = router;