const express = require('express');
const { signUpController } = require('../Controller/userController');

const router = express.Router();

// مسیر signup
router.post('/signup', signUpController);

module.exports = router;
