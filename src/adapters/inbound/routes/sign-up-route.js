const express = require('express');
const { signUpController } = require('../Controller/userController');
const { loginController } = require('../Controller/userLoginController');

const router = express.Router();

// مسیر signup
router.post('/signup', signUpController);
router.post('/login', loginController);

module.exports = router;
