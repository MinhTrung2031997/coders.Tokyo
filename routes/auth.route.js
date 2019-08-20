const express = require('express');
const router = express.Router();
const authLogin = require('../controller/auth.controller');

router.get('/login', authLogin.login);
router.post('/login', authLogin.postLogin);

module.exports = router;