const express = require('express');

const router = express.Router();

const customerController = require('../controllers/customer');

router.get('/get-menu', customerController.getMenu);
router.post('/order-items', customerController.orderItems);
router.post('/cancel-items', customerController.cancelItems);
router.post('/review-items', customerController.reviewItems);
router.post('/pay-bill', customerController.payBill);

module.exports = router;
