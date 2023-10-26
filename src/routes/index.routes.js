const express = require('express');
const {index, search, contact, platforms} = require('../controllers/indexControllers');
const router = express.Router();

/* GET home page. */
router.get('/', index);
router.get('/search', search);
router.get('/contact', contact);
router.get('/platforms/:id', platforms)

module.exports = router;
