const express = require('express');
const router = express.Router();
const { allProducts, idProducts } = require('../../controllers/APIs/apiProductsController');

router
    .get('/', allProducts)
 
    .get('/:id', idProducts)

module.exports = router