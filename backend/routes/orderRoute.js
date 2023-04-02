const express = require('express');
const { pendingOrder, completedOrder } = require('../controllers/orderController');
const router = express.Router();
router.get("/pendingOrder", pendingOrder);
router.get("/completedOrder", completedOrder);
module.exports = router;