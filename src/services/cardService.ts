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

async function getCardById(id: number, userId: number) {
  const card = await findByIdOrFail(id, userId);
  return decryptCard(card);
}

async function getCards(id: number) {
  const cards = await cardRepository.findByUserId(id);
  return decryptCardsArray(cards);
}

async function deleteCard(id: number, userId: number) {
  await findByIdOrFail(id, userId);
  await cardRepository.remove(id);
}

async function findByIdOrFail(id: number, userId: number) {
  const card = await cardRepository.findById(id, userId);

  if (!card) {
    throw {
      type: 'NOT_FOUND',
      message: 'Card not found!',
    };
  }

  return card;
}

function decryptCard(card: Cards) {
  return {
    ...card,
    securityCode: cryptr.decrypt(card.securityCode),
    password: cryptr.decrypt(card.password),
  };
}

function decryptCardsArray(cards: Cards[]) {
  return cards.map((card) => {
    return {
      ...decryptCard(card),
    };
  });
}

export { insertCard, getCardById, getCards, deleteCard };
