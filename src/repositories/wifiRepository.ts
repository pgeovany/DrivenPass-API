import prisma from '../database/database';
import { Wifis } from '@prisma/client';

export type WifiInsertData = Omit<Wifis, 'id'>;
export type WifiRequestData = Omit<Wifis, 'id' | 'userId'>;
