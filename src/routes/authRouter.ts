import { Router } from 'express';
import validateSchema from '../middlewares/schemaValidator';
import { signUpSchema } from '../utils/schemas';
import { signUp, signIn } from '../controllers/authController';

const userRouter = Router();

userRouter.post('/sign-up', validateSchema(signUpSchema), signUp);
userRouter.post('/sign-in', validateSchema(signUpSchema), signIn);

export default userRouter;
