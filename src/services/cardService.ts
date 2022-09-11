import * as cardRepository from '../repositories/cardRepository';
import { Cards } from '@prisma/client';
import cryptr from '../utils/cryptr';

async function insertCard(
  userId: number,
  card: cardRepository.CardsRequestData
) {
  const cardExists = await cardRepository.findByUserIdAndTitle(
    userId,
    card.title
  );

  if (cardExists) {
    throw {
      type: 'CONFLICT',
      message: 'Titles must be unique!',
    };
  }

  const encryptedCard = encryptCard(card);
  await cardRepository.create({ ...encryptedCard, userId });
}

function encryptCard(card: cardRepository.CardsRequestData) {
  return {
    ...card,
    securityCode: cryptr.encrypt(card.securityCode),
    password: cryptr.encrypt(card.password),
  };
}

export { insertCard };
