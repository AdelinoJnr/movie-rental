import express from 'express';
import Movie from '@controllers/movies';
import authToken from '@middlewares/authToken';

const router = express.Router();

router.post('/', authToken, Movie.create);
router.get('/', authToken, Movie.getAll);
router.get('/:id',authToken, Movie.getById);

export default router;