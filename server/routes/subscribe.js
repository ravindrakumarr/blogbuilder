import express from 'express';

import { getSubscribers, createSubscriber } from '../controllers/subscribe.js';

const router = express.Router();

router.get('/', getSubscribers);
router.post('/', createSubscriber);


export default router;