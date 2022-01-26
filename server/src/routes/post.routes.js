const express = require('express');
const router = express.Router();
const {
    createPost, getPosts,
    getSinglePost, updatePost,
    deletePost, /*likePost*/
} = require('../controller/post.controller');
const requireJwt = require('../middleware/requireJwt');

router.post('/createpost', requireJwt, createPost);
router.get('/getposts', getPosts);
router.get('/getpost/:id', getSinglePost);
router.put('/updatepost/:id', requireJwt, updatePost);
router.delete('/deletepost/:id', requireJwt, deletePost);
// router.put('/likepost/:id', likePost)

module.exports = router;
