import * as credentialsRepository from '../repositories/credentialsRepository';
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

  const encryptedCredential = encryptCredential(credentials);
  await credentialsRepository.create({ ...encryptedCredential, userId });
}

function encryptCredential(
  credentials: credentialsRepository.CredentialsRequestData
) {
  return {
    ...credentials,
    password: cryptr.encrypt(credentials.password),
  };
}

export { insertCredentials };
