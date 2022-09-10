import { Router } from 'express';
import authRouter from './authRouter';
import credentialsRouter from './credentialsRouter';
import notesRouter from './notesRouter';
import wifiRouter from './wifiRouter';

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(wifiRouter);

export default router;
