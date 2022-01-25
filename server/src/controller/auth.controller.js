const User = require('../model/user.model');
const expressAsyncHandler = require('express-async-handler');

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


const login = expressAsyncHandler(async(req, res) => {})

module.exports = {
    register,
    login
}
