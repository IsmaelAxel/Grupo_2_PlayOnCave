const express = require('express');
const {productCart, productDetail, productEdit, productAdd, productUpdate, productCreate, productDelete} = require('../controllers/productsControllers');
const upload = require('../middlewares/upload');
const adminCheck = require('../middlewares/adminCheck')
const productsValitador = require('../validations/productsValidator')
const userCheck = require('../middlewares/userCheck')

const router = express.Router();

/* GET home page. */
router.get('/productCart', userCheck,productCart);
router.get('/productDetail/:id?', productDetail);
router.get('/productEdit/:id',adminCheck, productEdit);
router.get('/productAdd', adminCheck,productAdd);
router.put('/productUpdate/:id', upload.fields([
    {
        name: 'mainImage', maxCount: 1
    },
    {
        name: 'images', maxCount: 5
    }]), productUpdate),

router.post('/productAdd', upload.fields([
        {
            name: 'mainImage', maxCount: 1
        },
        {
            name: 'images', maxCount: 5
        }
    ]),productsValitador, productCreate)

router.delete('/delete/:id', productDelete)

module.exports = router;