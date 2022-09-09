import { Router } from 'express';
import validateSchema from '../middlewares/schemaValidator';
import { signUpSchema } from '../utils/schemas';
import { signUp } from '../controllers/userController';

const userRouter = Router();
userRouter.post('/sign-up', validateSchema(signUpSchema), signUp);

export default userRouter;
