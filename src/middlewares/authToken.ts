import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const { SECRET = 'minhasenha' } = process.env;

const authToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) res.status(400).json({ message: "Token invalid!" });

  // try {
  //   const { data } = jwt.verify(token, SECRET);
  //   req.user = data;

  //   next();
  // } catch (_e) {
  //   return res.status(400).json({ message: "Token invalid!" });
  // }
  next();
};

export default authToken;