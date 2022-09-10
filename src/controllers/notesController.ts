import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';
import { NotesRequestData } from '../repositories/notesRepository';
import * as notesService from '../services/notesService';

async function saveNote(req: Request, res: Response) {
  const { id } = res.locals;
  const note: NotesRequestData = req.body;

  await notesService.insertNote(Number(id), note);

  res.sendStatus(httpStatus.CREATED);
}

async function getNoteById(req: Request, res: Response) {
  const { id } = req.params;
  const { id: userId } = res.locals;

  const note = await notesService.getNoteById(Number(id), Number(userId));

  res.status(httpStatus.OK).send(note);
}

async function getNotes(req: Request, res: Response) {
  const { id } = res.locals;

  const notes = await notesService.getNotes(Number(id));

  res.status(httpStatus.OK).send(notes);
}

async function deleteNote(req: Request, res: Response) {
  res.sendStatus(httpStatus.OK);
}

export { saveNote, getNoteById, getNotes, deleteNote };
