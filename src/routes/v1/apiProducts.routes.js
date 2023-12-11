const express = require('express');
const router = express.Router();
const { allProducts, idProducts, totalProducts } = require('../../controllers/APIs/apiProductsController');

router
    .get('/', allProducts)
    .get('/count', totalProducts)
    .get('/:id', idProducts)

module.exports = router