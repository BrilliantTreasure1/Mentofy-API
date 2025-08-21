const UserModel = require('../outbound/models/User');
const UserRepositoryPort = require('../../domain/user/UserRepositoryPort');

class MongoUserRepository extends UserRepositoryPort {
  async create(user) {
    return await UserModel.create(user);
  }

  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }
}

module.exports = MongoUserRepository;
