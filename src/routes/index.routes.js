const express = require('express');
const {index, search, contact} = require('../controllers/indexControllers');
const router = express.Router();

/* GET home page. */
router.get('/', index);
router.get('/search', search);
router.get('/contact', contact);


module.exports = router;
