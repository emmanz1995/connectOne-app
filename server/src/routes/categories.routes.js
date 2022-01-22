const express = require('express');
const router = express.Router();
const { createCategory, getCategory } = require('../controller/categories.controller');

router.post('/createcategory', createCategory);
router.get('/getcategories', getCategory);

module.exports = router;
