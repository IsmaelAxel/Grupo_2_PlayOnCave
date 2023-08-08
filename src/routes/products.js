const express = require('express');
const productsControllers = require('../controllers/productsControllers');

const router = express.Router();

/* GET home page. */
router.get('/productCart',productsControllers.productCart);
router.get('/productDetail/:id?',productsControllers.productDetail );
router.get('/productEdit',productsControllers.productEdit);
router.get('/productAdd',productsControllers.productAdd);
module.exports = router;