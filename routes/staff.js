const express = require('express');

const router = express.Router();

const staffControllers = require('../controllers/staff');

router.post('/take-order', staffControllers.takeOrder);
router.post('/place-order', staffControllers.placeOrder);
router.post('/collect-order', staffControllers.collectOrder);
router.post('/deliver-order', staffControllers.deliverOrder);
router.post('/check-with-customer', staffControllers.checkWithCustomer);
router.post('/collect-review', staffControllers.collectReview);
router.post('/collect-payment', staffControllers.collectPayment);
router.get('/bid-farewell', staffControllers.bidFarewell);

module.exports = router;
