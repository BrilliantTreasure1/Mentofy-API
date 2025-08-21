const SignUpService = require('../../../domain/SignUpService');
const MongoUserRepository = require('../../outbound/MongoUserRepository');

const userRepository = new MongoUserRepository();
const signUpService = new SignUpService(userRepository);

async function signUpController(req, res) {
  try {
    const { email, password } = req.body;
    const user = await signUpService.execute({ email, password });
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { signUpController };
