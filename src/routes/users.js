const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const router = express.Router();

/* GET users listing. */
router.get('/login', usersControllers.login);
router.get('/register', usersControllers.register);
router.get('/admin', usersControllers.admin);
module.exports = router;
