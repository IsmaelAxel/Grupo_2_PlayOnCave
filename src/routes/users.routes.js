const express = require('express');
const {login, processLogin, logout, register, processRegister, profile, updateProfile, admin} = require('../controllers/usersControllers');
const uploadUser = require('../middlewares/uploadUser');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator = require('../validations/profileValidator');
const userCheck = require('../middlewares/userCheck');
const adminCheck = require('../middlewares/adminCheck')
const router = express.Router();

/* GET users listing. */
router.get('/login', login);
router.post('/login', uploadUser.single('img'), loginValidator, processLogin);
router.get('/logout', logout);
router.get('/register', register);
router.post('/register', uploadUser.single('image'), registerValidator, processRegister);
router.get('/profile', userCheck, profile)
router.put('/profileUpdate/:id', userCheck, uploadUser.single('avatar'), profileValidator, updateProfile)
router.get('/admin', adminCheck, admin);
module.exports = router;
