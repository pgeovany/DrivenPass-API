import { Router } from 'express';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import validateSchema from '../middlewares/schemaValidator';
import {
  deleteCard,
  getCardById,
  getCards,
  saveCard,
} from '../controllers/cardController';
import { cardSchema } from '../utils/schemas';

const cardsRouter = Router();

cardsRouter.use(tokenMiddleware);

cardsRouter.post('/cards', validateSchema(cardSchema), saveCard);
cardsRouter.get('/cards/:id', getCardById);
cardsRouter.get('/cards', getCards);
cardsRouter.delete('/cards/:id', deleteCard);

export default cardsRouter;
