class SignUpService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute({ email, password }) {
      const existingUser = await this.userRepository.findByEmail(email);
      if (existingUser) throw new Error("User already exists");
  
      const user = await this.userRepository.create({ email, password });
      return user;
    }
  }
  
  module.exports = SignUpService;
  