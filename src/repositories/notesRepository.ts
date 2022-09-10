import prisma from '../database/database';
import { Notes } from '@prisma/client';

export type NotesInsertData = Omit<Notes, 'id'>;
export type NotesRequestData = Omit<Notes, 'id' | 'userId'>;

async function create(data: NotesInsertData) {
  await prisma.notes.create({ data });
}

async function findById(id: number, userId: number) {
  return await prisma.notes.findFirst({ where: { id, userId } });
}

async function findByUserId(userId: number) {
  return await prisma.notes.findMany({ where: { userId } });
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

async function remove(id: number) {
  await prisma.notes.delete({ where: { id } });
}

export { create, findByUserIdAndTitle, findById, findByUserId, remove };
