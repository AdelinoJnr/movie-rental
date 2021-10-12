import jwt from 'jsonwebtoken';
import User from '@models/users';
require('dotenv').config();

import Schema from '../utils/schema';

const { SECRET = 'minhasenha' } = process.env;

const userLogin = async (email: string, password: string) => {
  const { error } = Schema.userLogin.validate({ email, password });
  if (error) return { status: 400, message: 'Invalid entries!' };

  const user = await User.findByEmail(email);
  if (!user) return { status: 400, message: 'Email or password invalid!' };
  
  if (user.password !== password) return { status: 400, message: 'Email or password invalid!' };

  const { password: _, ...dataUser } = user;
  const token = jwt.sign({ data: dataUser }, SECRET);
  return { status: 200, data: { token } };
};

export default { userLogin };