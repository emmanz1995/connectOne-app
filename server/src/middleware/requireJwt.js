const jwt = require('jsonwebtoken');
const expressAsyncHandler = require('express-async-handler');
const User = require('../model/user.model');
const dotenv = require('dotenv');
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const requireJwt = expressAsyncHandler(async(req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')) {
        token = req?.headers?.authorization?.split(" ")[1];
        try {
            if(token) {
                const decodedUser = jwt.verify(token, SECRET_KEY);
                // find the logged in user
                req.user = await User.findById(decodedUser?.id).select("-password");
                next()
            }
        } catch(error) {
            throw new Error("Not Authorized!");
        }
    } else {
        throw new Error('No token found for the header!');
    }
})

module.exports = requireJwt;