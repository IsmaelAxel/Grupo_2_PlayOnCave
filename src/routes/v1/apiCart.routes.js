const express = require('express');
const { checkEmail } = require('../../controllers/APIs/apiUsersController');
const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart, endCart } = require('../../controllers/APIs/apiCartController');
const router = express.Router();

/* /api */
router
    .get('/check-email', checkEmail)
    .get('/', getCart)
    .post('/', addItemToCart)
    .delete('/', removeItemToCart)
    .delete('/item', deleteItemToCart)
    .delete('/end', endCart)
    .delete('/all', clearCart)
    


module.exports = router;
