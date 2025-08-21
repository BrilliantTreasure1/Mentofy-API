const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async login(email, password) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error('Invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid email or password');

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1h' }
    );

    return { token, user: { id: user._id, email: user.email } };
  }
}

module.exports = AuthService;
