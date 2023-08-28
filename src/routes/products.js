const express = require('express');
const productsControllers = require('../controllers/productsControllers');
const upload = require('../middlewares/upload');

const router = express.Router();

/* GET home page. */
router.get('/productCart',productsControllers.productCart);
router.get('/productDetail/:id?',productsControllers.productDetail);
router.get('/productEdit',productsControllers.productEdit);
router.get('/productAdd',productsControllers.productAdd);
router.post('/productAdd',upload.fields([
    {
        name: 'MainImage'
    },
    {
        name: 'images'
    }
]),productsControllers.productCreate);
router.delete('/delete/:id', productsControllers.productDelete);
module.exports = router;