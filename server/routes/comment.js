import express from 'express';

import { getComment, createComment } from '../controllers/comment.js';

const router = express.Router();

router.get('/', getComment);
router.post('/', createComment);


export default router;