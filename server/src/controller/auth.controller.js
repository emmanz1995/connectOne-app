const User = require('../model/user.model');
const expressAsyncHandler = require('express-async-handler');
const generateJwt = require('../util/generateJwt');
const Post = require('../model/post.model');
const Comment = require('../model/comments.model');
const gravatar = require('gravatar');

const register = expressAsyncHandler(async(req, res) => {
    const { email, username, password } = req?.body;
    const emailExists = await User.findOne({ email })
    if(emailExists) throw new Error('Email already exists!');
    try {
        const avatar = gravatar.url(email, {
            s: '200', r: 'pg', d: 'mm'
        })
        const createUser = await User.create({ email, avatar, username, password });
        res?.status(200).json(createUser);
    } catch(e) {
        res?.json(e)
    }
})


const login = expressAsyncHandler(async(req, res) => {
    const { username, password } = req?.body;
    const userInfo = await User.findOne({username})
    if(userInfo && (await userInfo?.isPasswordMatch(password))) {
        res?.json({
            username: userInfo?.username,
            _id: userInfo?._id,
            token: generateJwt(userInfo?._id)
        })
    } else {
        throw new Error('Incorrect login credentials!');
    }
})

const me = expressAsyncHandler(async(req, res) => {
    try {
        const getProfile = await User.findById({ _id: req?.user?._id })
        res?.json(getProfile)
    } catch(error) {
        res?.json(error)
    }
})

const deleteMyAccount = expressAsyncHandler(async (req, res) => {
    const userId = req?.user?._id
    try {
        const deleteMe = await User.findByIdAndDelete({ _id: userId })
        await Post.deleteMany({ postedBy: userId })
        await Comment.deleteMany({ reader: userId })
        res?.json(deleteMe)
    } catch(error) {
        res?.json(error);
    }
})

module.exports = {
    register,
    login,
    me,
    deleteMyAccount
}
