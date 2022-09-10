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

async function getNote(req: Request, res: Response) {
  res.sendStatus(httpStatus.OK);
}

async function getNotes(req: Request, res: Response) {
  res.sendStatus(httpStatus.OK);
}

async function deleteNote(req: Request, res: Response) {
  res.sendStatus(httpStatus.OK);
}

export { saveNote, getNote, getNotes, deleteNote };
