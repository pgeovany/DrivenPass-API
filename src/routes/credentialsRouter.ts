import { Router } from 'express';
import { saveCredentials } from '../controllers/credentialsController';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import validateSchema from '../middlewares/schemaValidator';
import { credentialSchema } from '../utils/schemas';

const credentialsRouter = Router();

credentialsRouter.post(
  '/credential',
  tokenMiddleware,
  validateSchema(credentialSchema),
  saveCredentials
);

export default credentialsRouter;
