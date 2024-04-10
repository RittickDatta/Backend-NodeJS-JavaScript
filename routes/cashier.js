const express = require('express');

const router = express.Router();

const cashierController = require('../controllers/cashier');

router.post('/take-payment', cashierController.takePayment);
router.post('/return-change', cashierController.returnChange);
router.post('/update-transactions', cashierController.updateTransactions);
router.get('/get-summary', cashierController.getSummary);

module.exports = router;
