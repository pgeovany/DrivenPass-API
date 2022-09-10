import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';
import { NotesRequestData } from '../repositories/notesRepository';
import * as notesService from '../services/notesService';

async function saveNote(req: Request, res: Response) {
  const { userId } = res.locals;
  const note: NotesRequestData = req.body;

  await notesService.insertNote(Number(userId), note);

  res.sendStatus(httpStatus.CREATED);
}

async function getNoteById(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  const note = await notesService.getNoteById(Number(id), Number(userId));

  res.status(httpStatus.OK).send(note);
}

async function getNotes(req: Request, res: Response) {
  const { userId } = res.locals;

  const notes = await notesService.getNotes(Number(userId));

  res.status(httpStatus.OK).send(notes);
}

async function deleteNote(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  await notesService.deleteNote(Number(id), Number(userId));

  res.sendStatus(httpStatus.OK);
}

export { saveNote, getNoteById, getNotes, deleteNote };
