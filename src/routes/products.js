const express = require('express');
const productsControllers = require('../controllers/productsControllers');
const upload = require('../middlewares/upload');

const router = express.Router();

/* GET home page. */
router.get('/productCart', productsControllers.productCart);
router.get('/productDetail/:id?', productsControllers.productDetail);
router.get('/productEdit/:id', productsControllers.productEdit);
router.get('/productAdd', productsControllers.productAdd);
router.put('/productUpdate/:id', upload.fields([
    {
        name: 'MainImage', maxCount: 1
    },
    {
        name: 'images', maxCount: 5
    }]), productsControllers.productUpdate),
    router.post('/productAdd', upload.fields([
        {
            name: 'MainImage'
        },
        {
            name: 'images'
        }
    ]), productsControllers.productCreate);
module.exports = router;