import { Request, Response } from 'express';
import Movie from '../services/movies';

const create = async (req: Request, res: Response) => {
  const { status, data } = await Movie.create(req.body);

  res.status(status).json(data);
};

const getAll = async (req: Request, res: Response) => {
  const { status, data } = await Movie.getAll();

  res.status(status).json(data);
};

export default { create, getAll };