import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';

async function saveNote(req: Request, res: Response) {
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
