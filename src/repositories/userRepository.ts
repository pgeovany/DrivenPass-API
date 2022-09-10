import prisma from '../database/database';
import { User } from '@prisma/client';

export type UserInsertData = Omit<User, 'id'>;

async function create(data: UserInsertData) {
  await prisma.user.create({ data });
}

async function findByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email } });
}

export { create, findByEmail };
