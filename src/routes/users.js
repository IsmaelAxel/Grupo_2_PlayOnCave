const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const uploadUser = require('../middlewares/uploadUser');
const registerValidator = require('../validations/registerValidator');
const router = express.Router();

/* GET users listing. */
router.get('/login', usersControllers.login);
router.get('/register', usersControllers.register);
router.post('/register', uploadUser.single('img'), registerValidator,usersControllers.processRegister);
router.get('/admin', usersControllers.admin);
router.get('/', usersControllers.users);
module.exports = router;
