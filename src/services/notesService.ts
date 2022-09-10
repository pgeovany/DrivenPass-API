import { Notes } from '@prisma/client';
import * as notesRepository from '../repositories/notesRepository';
import cryptr from '../utils/cryptr';

async function insertNote(
  userId: number,
  note: notesRepository.NotesRequestData
) {
  const noteExists = await notesRepository.findByUserIdAndTitle(
    userId,
    note.title
  );

  if (noteExists) {
    throw {
      type: 'CONFLICT',
      message: 'Titles must be unique!',
    };
  }

  const encryptedNote = encryptNote(note);
  await notesRepository.create({ ...encryptedNote, userId });
}

function encryptNote(note: notesRepository.NotesRequestData) {
  return {
    ...note,
    note: cryptr.encrypt(note.note),
  };
}

async function getNoteById(id: number, userId: number) {
  const note = await findByIdOrFail(id, userId);
  return decryptNote(note);
}

async function getNotes(userId: number) {
  const notes = await notesRepository.findByUserId(userId);
  return decryptNotesArray(notes);
}

async function deleteNote(id: number, userId: number) {
  await findByIdOrFail(id, userId);
  await notesRepository.remove(id);
}

async function findByIdOrFail(id: number, userId: number) {
  const note = await notesRepository.findById(id, userId);

  if (!note) {
    throw {
      type: 'NOT_FOUND',
      message: 'Note not found!',
    };
  }

  return note;
}

function decryptNote(note: Notes) {
  return {
    ...note,
    note: cryptr.decrypt(note.note),
  };
}

function decryptNotesArray(notes: Notes[]) {
  return notes.map((note) => {
    return {
      ...decryptNote(note),
    };
  });
}

export { insertNote, getNoteById, getNotes, deleteNote };
