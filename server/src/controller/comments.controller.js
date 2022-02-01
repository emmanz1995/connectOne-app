const Comments = require('../model/comments.model');
const Posts = require('../model/post.model');
const expressAsyncHandler = require('express-async-handler');

const addComment = expressAsyncHandler(async (req, res) => {
    const { comment } = req?.body;
    const id = req?.params?.id;
    const user = req?.user;
    if(!id) {
        throw new Error('Enter the Post id!');
    }
    let post;
    try {
        post = await Posts.findById(id)
        if(!post) {
            throw new Error('Could not find Post id!')
        }
        const postComment = await Comments.create({ comment, reader: user._id, post: id })
        res?.json({ postComment, reader: { username: user?.username }})
    } catch(error) {
        res?.json(error);
    }
})

const getComment = expressAsyncHandler(async (req, res) => {
    const postId = req?.params?.postId;
    try {
        const retrieveComments = await Comments.find({post: { _id: postId }}).populate('reader', 'username')
        res?.json(retrieveComments)
    } catch(error) {
        res?.json(error);
    }
})

const removeComment = expressAsyncHandler(async (req, res) => {})

module.exports = { addComment, getComment }
