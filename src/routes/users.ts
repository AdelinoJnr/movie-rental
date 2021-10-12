import express from 'express';
import User from '@controllers/users';

const router = express.Router();

router.post('/', User.create);
router.get('/', User.getAll);
router.get('/:id', User.getById);

export default router;
