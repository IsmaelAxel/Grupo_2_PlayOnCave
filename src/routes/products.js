const express = require('express');
const productsControllers = require('../controllers/productsControllers');

const router = express.Router();

/* GET home page. */
router.get('/productCart',productsControllers.productCart);
router.get('/productDetail/:id?',productsControllers.productDetail );
module.exports = router;