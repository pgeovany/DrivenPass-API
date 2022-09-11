import prisma from '../database/database';
import { Cards } from '@prisma/client';

export type CardsInsertData = Omit<Cards, 'id'>;
export type CardsRequestData = Omit<Cards, 'id' | 'userId'>;

async function create(data: CardsInsertData) {
  await prisma.cards.create({ data });
}

async function findById(id: number, userId: number) {
  return await prisma.cards.findFirst({ where: { id, userId } });
}

async function findByUserId(userId: number) {
  return await prisma.cards.findMany({ where: { userId } });
}

async function findByUserIdAndTitle(userId: number, title: string) {
  return await prisma.cards.findUnique({
    where: {
      userId_title: {
        userId,
        title,
      },
    },
  });
}

async function remove(id: number) {
  await prisma.cards.delete({ where: { id } });
}

export { create, findByUserIdAndTitle, findById, findByUserId, remove };
