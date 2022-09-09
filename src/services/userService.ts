import * as userRepository from '../repositories/userRepository';
import encrypt from '../utils/bcrypt';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken';

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

async function signIn({ email, password }: userRepository.UserInsertData) {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw {
      type: 'NOT_FOUND',
      message: 'User not found!',
    };
  }

  await validateUserPasswordOrFail(password, user.password);
  return generateToken(user.id);
}

async function validateUserPasswordOrFail(
  plainTextPassword: string,
  passwordHash: string
) {
  if (bcrypt.compareSync(plainTextPassword, passwordHash)) {
    return;
  }
  throw {
    type: 'UNAUTHORIZED',
    message: 'Wrong email or password!',
  };
}

export { createUserAccount, signIn };
