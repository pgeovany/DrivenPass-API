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

async function getWifiById(id: number, userId: number) {
  const wifi = await findByIdOrFail(id, userId);
  return decryptWifi(wifi);
}

async function getWifis(userId: number) {
  const wifi = await wifiRepository.findByUserId(userId);
  return decryptWifiArray(wifi);
}

async function findByIdOrFail(id: number, userId: number) {
  const wifi = await wifiRepository.findById(id, userId);

  if (!wifi) {
    throw {
      type: 'NOT_FOUND',
      message: 'Wi-fi not found!',
    };
  }

  return wifi;
}

function decryptWifi(wifi: Wifis) {
  return {
    ...wifi,
    password: cryptr.decrypt(wifi.password),
  };
}

function decryptWifiArray(wifis: Wifis[]) {
  return wifis.map((wifi) => {
    return {
      ...decryptWifi(wifi),
    };
  });
}

export { insertWifi, getWifiById, getWifis };
