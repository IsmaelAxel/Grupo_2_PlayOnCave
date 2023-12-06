const express = require('express');
const { checkEmail } = require('../../controllers/APIs/apiUsersController');
const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../../controllers/APIs/apiCartController');
const router = express.Router();

/* /api */
router
    .get('/check-email', checkEmail)
    .get('/', getCart)
    .post('/', addItemToCart)
    .delete('/', removeItemToCart)
    .delete('/item', deleteItemToCart)
    .delete('/all', clearCart)


module.exports = router;
