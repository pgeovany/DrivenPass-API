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

export { insertNote };
