import * as cardService from '../services/cardService';
import { CardsRequestData } from '../repositories/cardRepository';
import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';

async function saveCard(req: Request, res: Response) {
  const { userId } = res.locals;
  const card: CardsRequestData = req.body;

  await cardService.insertCard(Number(userId), card);

  res.sendStatus(httpStatus.CREATED);
}

async function getCardById(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  const card = await cardService.getCardById(Number(id), Number(userId));

  res.status(httpStatus.OK).send(card);
}

async function getCards(req: Request, res: Response) {
  const { userId } = res.locals;

  const cards = await cardService.getCards(Number(userId));

  res.status(httpStatus.OK).send(cards);
}

async function deleteCard(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  await cardService.deleteCard(Number(id), Number(userId));

  res.sendStatus(httpStatus.OK);
}

export { saveCard, getCardById, getCards, deleteCard };
