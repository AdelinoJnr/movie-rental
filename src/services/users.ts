import User from '../models/users';

interface createUser {
  email: string,
  name: string,
  age: number,
  password: string
}

const create = async (data: createUser) => {
  const user = User.create(data);

  return { status: 201, data: user };
};

export default { create };