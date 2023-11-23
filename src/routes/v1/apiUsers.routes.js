const express = require('express');
const router = express.Router();
const { allUsers, idUser, checkEmail } = require('../../controllers/APIs/apiUsersController');
router
    .get('/check-email', checkEmail)
    .get('/', allUsers)
    .get('/:id', idUser)
module.exports = router