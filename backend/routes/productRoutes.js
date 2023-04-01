const express = require('express');
const Product = require("../models/producModel");
const router = express.Router();

const {showAllProducts,showProductsForRent,showSellProdcuts} = require("../controllers/productControllers");





router.get("/allProducts",showAllProducts);

router.get("/allProducts/rent",showProductsForRent);

router.get("/allProducts/sell",showSellProdcuts);




module.exports = router;