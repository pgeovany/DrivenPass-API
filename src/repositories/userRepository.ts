import prisma from '../database/database';
import { User } from '@prisma/client';

export type UserInsertData = Omit<User, 'id'>;

async function create(userData: UserInsertData) {
  await prisma.user.create({ data: userData });
}

async function findByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email } });
}

export { create, findByEmail };
