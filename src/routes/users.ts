import express from 'express';
import User from '@controllers/users';

const router = express.Router();

router.post('/', User.create);

export default router;
