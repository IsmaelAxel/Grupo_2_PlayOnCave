const express = require('express');
const { allCategories } = require('../../controllers/APIs/apiCategoriesController');

const router = express.Router();


router
    
    .get('/', allCategories )
module.exports = router