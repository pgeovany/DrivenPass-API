import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';
import { UserInsertData } from '../repositories/userRepository';
import * as userService from '../services/userService';

async function signUp(req: Request, res: Response) {
  const user: UserInsertData = req.body;

  await userService.createUserAccount(user);

  res.sendStatus(httpStatus.CREATED);
}

export { signUp };
