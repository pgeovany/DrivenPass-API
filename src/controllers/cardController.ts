import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';

async function saveCard(req: Request, res: Response) {
  const { userId } = res.locals;

  res.sendStatus(httpStatus.CREATED);
}

async function getCardById(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  res.status(httpStatus.OK).send('');
}

async function getCards(req: Request, res: Response) {
  const { userId } = res.locals;

  res.status(httpStatus.OK).send('');
}

async function deleteCard(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  res.sendStatus(httpStatus.OK);
}

export { saveCard, getCardById, getCards, deleteCard };
