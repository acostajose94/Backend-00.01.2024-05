const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/create', cartController.createCart);
router.post('/add-item', cartController.addItemToCart);
router.post('/checkout', cartController.checkout);

module.exports = router;