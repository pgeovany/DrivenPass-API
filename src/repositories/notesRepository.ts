import prisma from '../database/database';
import { Notes } from '@prisma/client';

export type NotesInsertData = Omit<Notes, 'id'>;
export type NotesRequestData = Omit<Notes, 'id' | 'userId'>;

async function create(data: NotesInsertData) {
  await prisma.notes.create({ data });
}

async function findByUserIdAndTitle(userId: number, title: string) {
  return await prisma.notes.findUnique({
    where: {
      userId_title: {
        userId,
        title,
      },
    },
  });
}

export { create, findByUserIdAndTitle };
