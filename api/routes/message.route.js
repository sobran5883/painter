import express from 'express';
import {storeMessage} from '../controllers/message.controller.js';

const router = express.Router();

router.post('/store', storeMessage);

export default router;