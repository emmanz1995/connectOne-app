const express = require('express');
const router = express.Router();
const {
    createPost, getPosts,
    getSinglePost, updatePost,
    deletePost
} = require('../controller/post.controller');

router.post('/createpost', createPost);
router.get('/getposts', getPosts);
router.get('/getpost/:id', getSinglePost);
router.put('/updatepost/:id', updatePost);
router.delete('/deletepost/:id', deletePost);

module.exports = router;
