const express = require('express');
const homeController = require('../controllers/home');

const router = express.Router();

router.use('/', homeController);

module.exports = router;
