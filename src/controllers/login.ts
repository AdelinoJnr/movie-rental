import { Request, Response } from 'express';
import Login from '@services/login';

const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { status, data, message } = await Login.userLogin(email, password);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

export default { userLogin };