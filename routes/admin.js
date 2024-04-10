const express = require('express');

const router = express.Router();

const adminControllers = require('../controllers/admin');

// Menu
router.get('/menu', adminControllers.getMenu);
router.post('/menu', adminControllers.addMenu);
router.patch('/menu/edit-menu', adminControllers.editMenu);
router.delete('/menu/:menuId', adminControllers.deleteMenu);

// Items
router.get('/item', adminControllers.getItem);
router.post('/item', adminControllers.addItem);
router.patch('/item/edit-item', adminControllers.editItem);
router.delete('/item/:itemId', adminControllers.deleteItem);

// Staff
router.get('/staff', adminControllers.getStaff);
router.post('/staff', adminControllers.addStaff);
router.patch('/staff', adminControllers.editStaff);
router.delete('/staff', adminControllers.deleteStaff);

module.exports = router;
