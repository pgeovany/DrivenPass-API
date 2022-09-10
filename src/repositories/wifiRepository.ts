import prisma from '../database/database';
import { Wifis } from '@prisma/client';

export type WifiInsertData = Omit<Wifis, 'id'>;
export type WifiRequestData = Omit<Wifis, 'id' | 'userId'>;

async function create(data: WifiInsertData) {
  await prisma.wifis.create({ data });
}

async function findById(id: number, userId: number) {
  return await prisma.wifis.findFirst({ where: { id, userId } });
}

async function findByUserId(userId: number) {
  return await prisma.wifis.findMany({ where: { userId } });
}

async function findByUserIdAndTitle(userId: number, title: string) {
  return await prisma.wifis.findUnique({
    where: {
      userId_title: {
        userId,
        title,
      },
    },
  });
}

async function remove(id: number) {
  await prisma.wifis.delete({ where: { id } });
}

export { create, findByUserIdAndTitle, findById, findByUserId, remove };
