const express = require('express');
const {login, processLogin, logout, register, processRegister, profile, updateProfile, admin} = require('../controllers/usersControllers');
const uploadUser = require('../middlewares/uploadUser');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator = require('../validations/profileValidator');
const userCheck = require('../middlewares/userCheck');
const adminCheck = require('../middlewares/adminCheck');
const userRedirect=require('../middlewares/userRedirect');
const router = express.Router();

/* GET users listing. */
router.get('/login',userRedirect, login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);
router.get('/register',userRedirect, register);
router.post('/register', uploadUser.single('image'), registerValidator, processRegister);
router.get('/profile', userCheck, profile)
router.put('/profileUpdate', uploadUser.single('image'),profileValidator, userCheck, updateProfile)
router.get('/admin', adminCheck, admin);
module.exports = router;
