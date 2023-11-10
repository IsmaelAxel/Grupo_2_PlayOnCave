const express = require('express');
const router = express.Router();
const { allUsers, idUser } = require('../../controllers/APIs/apiUsersController');
router
    .get('/', allUsers)
    .get('/:id', idUser)
module.exports = router