import { Router } from 'express';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import validateSchema from '../middlewares/schemaValidator';
import { wifiSchema } from '../utils/schemas';
import {
  deleteWifi,
  getWifiById,
  getWifis,
  saveWifi,
} from '../controllers/wifiController';

const wifiRouter = Router();

wifiRouter.use(tokenMiddleware);

wifiRouter.post('/wifis', validateSchema(wifiSchema), saveWifi);
wifiRouter.get('/wifis/:id', getWifiById);
wifiRouter.get('/wifis', getWifis);
wifiRouter.delete('/wifis/:id', deleteWifi);

export default wifiRouter;
