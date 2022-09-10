import * as credentialsRepository from '../repositories/credentialsRepository';
import { Credentials } from '@prisma/client';
import cryptr from '../utils/cryptr';

async function insertCredentials(
  userId: number,
  credentials: credentialsRepository.CredentialsRequestData
) {
  const credentialExists = await credentialsRepository.findByUserIdAndTitle(
    userId,
    credentials.title
  );

  if (credentialExists) {
    throw {
      type: 'CONFLICT',
      message: 'Titles must be unique!',
    };
  }

  const encryptedCredentials = encryptCredentials(credentials);
  await credentialsRepository.create({ ...encryptedCredentials, userId });
}

async function getCredentialsById(id: number, userId: number) {
  const credentials = await findByIdOrFail(id, userId);
  return decryptCredentials(credentials);
}

async function deleteCredentials(id: number, userId: number) {
  await findByIdOrFail(id, userId);
  await credentialsRepository.remove(id);
}

async function findByIdOrFail(id: number, userId: number) {
  const credentials = await credentialsRepository.findById(id, userId);

  if (!credentials) {
    throw {
      type: 'NOT_FOUND',
      message: 'Credentials not found!',
    };
  }

  return credentials;
}

async function getAllCredentials(userId: number) {
  const credentials = await credentialsRepository.findByUserId(userId);
  return decryptCredentialsArray(credentials);
}

function decryptCredentialsArray(credentials: Credentials[]) {
  return credentials.map((credentials) => {
    return {
      ...credentials,
      password: cryptr.decrypt(credentials.password),
    };
  });
}

function decryptCredentials(credentials: Credentials) {
  return {
    ...credentials,
    password: cryptr.decrypt(credentials.password),
  };
}

function encryptCredentials(
  credentials: credentialsRepository.CredentialsRequestData
) {
  return {
    ...credentials,
    password: cryptr.encrypt(credentials.password),
  };
}

export {
  insertCredentials,
  getCredentialsById,
  getAllCredentials,
  deleteCredentials,
};
