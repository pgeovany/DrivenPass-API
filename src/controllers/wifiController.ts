import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';

async function saveWifi(req: Request, res: Response) {
  const { userId } = res.locals;
  res.sendStatus(httpStatus.CREATED);
}

async function getWifiById(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  res.status(httpStatus.OK).send('');
}

async function getWifis(req: Request, res: Response) {
  const { userId } = res.locals;

  res.status(httpStatus.OK).send('');
}

async function deleteWifi(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  res.sendStatus(httpStatus.OK);
}

export { saveWifi, getWifiById, getWifis, deleteWifi };
