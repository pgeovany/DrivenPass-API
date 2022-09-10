import * as wifiRepository from '../repositories/wifiRepository';
import { Wifis } from '@prisma/client';
import cryptr from '../utils/cryptr';

async function insertWifi(
  userId: number,
  wifi: wifiRepository.WifiRequestData
) {
  const wifiExists = await wifiRepository.findByUserIdAndTitle(
    userId,
    wifi.title
  );

  if (wifiExists) {
    throw {
      type: 'CONFLICT',
      message: 'Titles must be unique!',
    };
  }

  const encryptedNote = encryptWifi(wifi);
  await wifiRepository.create({ ...encryptedNote, userId });
}

function encryptWifi(wifi: wifiRepository.WifiRequestData) {
  return {
    ...wifi,
    password: cryptr.encrypt(wifi.password),
  };
}

export { insertWifi };
