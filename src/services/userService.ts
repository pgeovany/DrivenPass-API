import * as userRepository from '../repositories/userRepository';
import encrypt from '../utils/bcrypt';

async function createUserAccount({
  email,
  password,
}: userRepository.UserInsertData) {
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

async function getUserByEmail(email: string) {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw {
      type: 'NOT_FOUND',
      message: 'User not found!',
    };
  }

  return user;
}

export { createUserAccount, getUserByEmail };
