const express = require('express');
const {productCart, productDetail, productEdit, productAdd, productUpdate, productCreate, productDelete} = require('../controllers/productsControllers');
const upload = require('../middlewares/upload');
const productAddValidator = require('../validations/productsAddValidator');
const productEditValidator = require('../validations/productEditValidator');

const router = express.Router();

/* GET home page. */
router.get('/productCart', productCart);
router.get('/productDetail/:id?', productDetail);
router.get('/productEdit/:id', productEdit);
router.get('/productAdd', productAdd);
router.put('/productUpdate/:id', upload.fields([
    {
        name: 'MainImage', maxCount: 1
    },
    {
        name: 'images', maxCount: 5
    }]), productEditValidator, productUpdate),

router.post('/productAdd', upload.fields([
        {
            name: 'MainImage', 
        },
        {
            name: 'images', maxCount: 5
        }
    ]), productAddValidator, productCreate)

router.delete('/delete/:id', productDelete)

module.exports = router;