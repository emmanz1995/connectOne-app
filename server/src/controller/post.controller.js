const Post = require('../model/post.model');
const expressAsyncHandler = require('express-async-handler');

const createPost = expressAsyncHandler(async (req, res) => {
    const { title, content, image, categories } = req?.body;
    try {
        const newPost = await Post.create({ title, content, image, categories })
        res?.json(newPost)
    } catch(error) {
        res?.json(error)
    }
})

const getPosts = expressAsyncHandler(async (req, res) => {
    const categoryName = req?.query?.category
    try {
        let posts;
        if(categoryName) {
            posts = await Post.find({categories: {
                $in: [categoryName]
            }})
        } else {
            posts = await Post.find()
        }
        res?.json(posts)
    } catch(error) {
        res?.json(error);
    }
})

const updatePost = expressAsyncHandler( async (req, res) => {
    const id = req?.params?.id;
    try {
        const updatePosts = await Post.findByIdAndUpdate(id, {
            $set: req?.body
        }, {
            new: true
        })
        res?.json(updatePosts)
    } catch(err) {
        res?.json(err);
    }
})

const deletePosts = expressAsyncHandler( async (req, res) => {
})

module.exports = { createPost, getPosts, updatePost };
