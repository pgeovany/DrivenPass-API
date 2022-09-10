import { Router } from 'express';
import {
  deleteCredentials,
  getAllCredentials,
  getCredential,
  saveCredentials,
} from '../controllers/credentialsController';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import validateSchema from '../middlewares/schemaValidator';
import { credentialSchema } from '../utils/schemas';

const credentialsRouter = Router();

credentialsRouter.use(tokenMiddleware);
credentialsRouter.post(
  '/credentials',
  validateSchema(credentialSchema),
  saveCredentials
);

credentialsRouter.get('/credentials', getAllCredentials);
credentialsRouter.get('/credentials/:id', getCredential);
credentialsRouter.delete('/credentials/:id', deleteCredentials);

export default credentialsRouter;
