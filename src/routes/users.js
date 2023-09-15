const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const uploadUser = require('../middlewares/uploadUser');
const registerValidator = require('../validations/registerValidator');
const loginValitator = require('../validations/loginValitator');
const profileValidator = require('../validations/profileValidator');
const userCheck = require('../middlewares/userCheck');
const adminCheck = require('../middlewares/adminCheck')
const router = express.Router();

/* GET users listing. */
router.get('/login', usersControllers.login);
router.post('/login', uploadUser.single('img'), loginValitator, usersControllers.processLogin);
router.get('/logout', usersControllers.logout);
router.get('/register', usersControllers.register);
router.post('/register', uploadUser.single('img'), registerValidator, usersControllers.processRegister);
router.get('/profile', userCheck, usersControllers.profile)
router.put('/profileUpdate/:id', userCheck, uploadUser.single('avatar'), profileValidator, usersControllers.updateProfile)
router.get('/admin', adminCheck, usersControllers.admin);
router.get('/', usersControllers.users);
module.exports = router;
