const UserRepository = require('../../outbound/MongoUserRepository');
const AuthService = require('../../../domain/auth-service');

const authService = new AuthService(new UserRepository());

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginController };
