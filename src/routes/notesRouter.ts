import { Router } from 'express';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import validateSchema from '../middlewares/schemaValidator';
import {
  saveNote,
  getNote,
  getNotes,
  deleteNote,
} from '../controllers/notesController';
import { noteSchema } from '../utils/schemas';

const notesRouter = Router();

notesRouter.use(tokenMiddleware);

notesRouter.post('/notes', validateSchema(noteSchema), saveNote);
notesRouter.get('/notes/:id', getNote);
notesRouter.get('/notes', getNotes);
notesRouter.delete('/notes/:id', deleteNote);

export default notesRouter;
