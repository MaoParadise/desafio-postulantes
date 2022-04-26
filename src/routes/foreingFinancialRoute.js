const express = require('express');
const router = express.Router();
const foreingFinancialCtrl = require('../controllers/foreingFinancialController');

router.get('/All', foreingFinancialCtrl.getAllTable);

module.exports = router;