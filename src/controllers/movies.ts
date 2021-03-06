import { Request, Response } from 'express';
import Movie from '../services/movies';

const create = async (req: Request, res: Response) => {
  const { status, data, message } = await Movie.create(req.body);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const getAll = async (req: Request, res: Response) => {
  const { status, data } = await Movie.getAll();

  res.status(status).json(data);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, data, message } = await Movie.getById(id);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

export default { create, getAll, getById };