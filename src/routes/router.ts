import { Router } from 'express';
import authRouter from './authRouter';
import credentialsRouter from './credentialsRouter';
import notesRouter from './notesRouter';

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);

export default router;
