import User from '../services/users';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  const { status, data } = await User.create(req.body);

  res.status(status).json(data);
};

export default { create };