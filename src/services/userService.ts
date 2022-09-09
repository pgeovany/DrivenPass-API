import * as userRepository from '../repositories/userRepository';
import encrypt from '../utils/bcrypt';

async function createUserAccount(user: userRepository.UserInsertData) {
  const { email, password } = user;
  const userExists = await userRepository.findByEmail(email);

  if (userExists) {
    throw {
      type: 'CONFLICT',
      message: 'This email is already registered!',
    };
  }

  const passwordHash = await encrypt(password);
  await userRepository.create({ email, password: passwordHash });
}

export { createUserAccount };
