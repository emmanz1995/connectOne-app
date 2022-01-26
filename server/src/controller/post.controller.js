const Post = require('../model/post.model');
const expressAsyncHandler = require('express-async-handler');

const createPost = expressAsyncHandler(async (req, res) => {
    const { title, content, image, categories } = req?.body;
    try {
        const newPost = await Post.create({ title, content, image, categories, postedBy: req?.user?._id })
        console.log(req?.user)
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

const getSinglePost = expressAsyncHandler( async (req, res) => {
    const id = req?.params?.id;
    try {
        const singlePost = await Post.findById(id)
        res?.json(singlePost)
    } catch(error) {
        res?.json(error)
        console.log(error);
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

const deletePost = expressAsyncHandler( async (req, res) => {
    const id = req?.params?.id;
    try {
        const deletePost = await Post.findByIdAndDelete(id)
        res?.json(deletePost)
    } catch(error) {
        res?.json(error)
        console.log(error);
    }
})

// const likePost = expressAsyncHandler(async (req, res) => {
//     const id = req?.params?.id
//     try {
//         const likePost = await Post.findByIdAndUpdate(id, {
//             $push: {like: 1 }
//         })
//         res?.json(likePost)
//     } catch(error) {
//         res?.json(error);
//     }
// })

module.exports = {
    createPost, getPosts,
    updatePost, deletePost,
    getSinglePost, /*likePost*/
};
