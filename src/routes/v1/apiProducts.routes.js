const express = require('express');
const router = express.Router();
const { allProducts, idProducts, showProducts, storeProducts, updateProduct, deleteProduct } = require('../../controllers/APIs/apiProductsController');

router
    .get('/', allProducts)
    .get('/:id', idProducts)
    .post('/', storeProducts)
    .put('/:id', updateProduct)
    .delete('/:id', deleteProduct)
module.exports = router