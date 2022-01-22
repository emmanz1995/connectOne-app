const express = require('express');
const router = express.Router();
const { createPost, getPosts, updatePost } = require('../controller/post.controller');

router.post('/createpost', createPost);
router.get('/getposts', getPosts);
router.put('/updatepost/:id', updatePost);

module.exports = router;
