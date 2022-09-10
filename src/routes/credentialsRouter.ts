import { Router } from 'express';
import {
  getAllCredentials,
  getCredential,
  saveCredentials,
} from '../controllers/credentialsController';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import validateSchema from '../middlewares/schemaValidator';
import { credentialSchema } from '../utils/schemas';

const credentialsRouter = Router();

credentialsRouter.post(
  '/credentials',
  tokenMiddleware,
  validateSchema(credentialSchema),
  saveCredentials
);

credentialsRouter.get('/credentials', tokenMiddleware, getAllCredentials);
credentialsRouter.get('/credentials/:id', tokenMiddleware, getCredential);

export default credentialsRouter;
