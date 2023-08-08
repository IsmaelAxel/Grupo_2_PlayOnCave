const express = require('express');
const indexControllers = require('../controllers/indexControllers');
const router = express.Router();

/* GET home page. */
router.get('/', indexControllers.index );

module.exports = router;
