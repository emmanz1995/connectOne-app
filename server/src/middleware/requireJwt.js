const jwt = require('jsonwebtoken');
const expressAsyncHandler = require('express-async-handler');
const User = require('../model/user.model');
const dotenv = require('dotenv');
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const requireJwt = expressAsyncHandler((req, res, next) => {
    let token;

    const authorizationHeader = req?.headers;
    if(authorizationHeader?.startsWith('Bearer')) {
        token = authorizationHeader?.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, SECRET_KEY);
            req.user = User.findById(decodedToken?._id).select('-password');
            next();
        } catch(err) {
            throw new Error('Your are not Authorized')
        }
    } else {
        throw new Error('No token found for the header!');
    }
})

module.exports = requireJwt;