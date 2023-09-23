const express = require('express');
const indexControllers = require('../controllers/indexControllers');
const router = express.Router();

/* GET home page. */
router.get('/', indexControllers.index );
router.get('/search', indexControllers.search );
router.get('/contact', indexControllers.contact );


module.exports = router;
