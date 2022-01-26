const User = require('../model/user.model');
const expressAsyncHandler = require('express-async-handler');
const generateJwt = require('../util/generateJwt');

const register = expressAsyncHandler(async(req, res) => {
    const { email, username, password } = req?.body;
    const emailExists = await User.findOne({ email })
    if(emailExists) throw new Error('Email already exists!');
    try {
        const createUser = await User.create({ email, username, password });
        res?.status(200).json(createUser)
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

module.exports = {
    register,
    login
}
