import User from '../models/users';
import Schema from '../utils/schema';

interface createUser {
  email: string,
  name: string,
  age: number,
  password: string
}

const create = async (data: createUser) => {
  const { error } = Schema.createUser.validate(data);
  if (error) return { status: 400, message: 'Invalid entries!' };

  const checkedEmail = await User.findByEmail(data.email);
  if (checkedEmail) return { status: 401, message: 'Email already registered' };

  const user = await User.create(data);
  return { status: 201, data: user };
};

const getAll = async () => {
  const users = await User.getAll();

  return { status: 200, data: users };
};

const getById = async (id: string) => {
  const user = await User.getById(id);
  if (!user) return { status: 404, message: 'User does not exist!' }

  return { status: 200, data: user };
};

export default { create, getAll, getById };