const express = require('express');
const router = express.Router();
const requireJwt = require('../middleware/requireJwt');
const { addComment, getComment } = require('../controller/comments.controller');

router.post('/addcomment/:id', requireJwt, addComment);
router.get('/getcomments/:postId', requireJwt, getComment);
router.delete('/removecomment', requireJwt);

module.exports = router;
