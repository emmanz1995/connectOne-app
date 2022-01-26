const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY

const generateJwt = (id) => {
    return jwt.sign({id}, SECRET_KEY, { expiresIn: '9h' });
}

module.exports = generateJwt;