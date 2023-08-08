const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const router = express.Router();

/* GET users listing. */
router.get('/login', usersControllers.login);
router.get('/register', usersControllers.register);

module.exports = router;
