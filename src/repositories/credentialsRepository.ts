import prisma from '../database/database';
import { Credentials } from '@prisma/client';

export type CredentialsInsertData = Omit<Credentials, 'id'>;
export type CredentialsRequestData = Omit<Credentials, 'id' | 'userId'>;

async function create(data: CredentialsInsertData) {
  await prisma.credentials.create({ data });
}

async function findById(id: number, userId: number) {
  return await prisma.credentials.findFirst({ where: { id, userId } });
}

async function findByUserId(userId: number) {
  return await prisma.credentials.findMany({ where: { userId } });
}

async function findByUserIdAndTitle(userId: number, title: string) {
  return await prisma.credentials.findUnique({
    where: {
      userId_title: {
        userId,
        title,
      },
    },
  });
}

export { create, findById, findByUserId, findByUserIdAndTitle };
