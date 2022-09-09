import * as userRepository from '../repositories/userRepository';
import * as userService from './userService';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

async function signIn({ email, password }: userRepository.UserInsertData) {
  const user = await userService.getUserByEmail(email);

  await validatePasswordOrFail(password, user.password);

  return generateToken(user.id);
}

async function validatePasswordOrFail(
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

function generateToken(id: number) {
  const TWO_HOURS_IN_SECONDS = 60 * 60 * 2;
  const { JWT_SECRET } = process.env;

  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: TWO_HOURS_IN_SECONDS,
  });

  return token;
}

export { signIn };
