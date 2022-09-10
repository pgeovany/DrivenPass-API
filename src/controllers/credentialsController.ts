import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';
import * as credentialService from '../services/credentialsService';
import { CredentialsRequestData } from '../repositories/credentialsRepository';

async function saveCredentials(req: Request, res: Response) {
  const { id } = res.locals;
  const credential: CredentialsRequestData = req.body;

  await credentialService.insertCredentials(Number(id), credential);

  res.sendStatus(httpStatus.CREATED);
}

async function getCredential(req: Request, res: Response) {
  const { id } = req.params;
  const { id: userId } = res.locals;

  const credentials = await credentialService.getCredentialsById(
    Number(id),
    Number(userId)
  );

  res.status(httpStatus.OK).send(credentials);
}

export { saveCredentials, getCredential };