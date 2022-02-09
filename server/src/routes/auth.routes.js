const express = require('express');
const router = express.Router();
const { register, login, me } = require('../controller/auth.controller');
const requireJwt = require('../middleware/requireJwt');

router.post('/register', register);
router.post('/login', login);
router.get('/me', requireJwt, me);

module.exports = router;
