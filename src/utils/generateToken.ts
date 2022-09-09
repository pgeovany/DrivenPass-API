import jwt from 'jsonwebtoken';

function generateToken(id: number) {
  const TWO_HOURS_IN_SECONDS = 60 * 60 * 2;
  const { JWT_SECRET } = process.env;

  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: TWO_HOURS_IN_SECONDS,
  });

  return token;
}

export default generateToken;
