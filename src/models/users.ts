import getConnection from './connection';

interface createUser {
  email: string,
  name: string,
  age: number,
  password: string
}

const create = async (data: createUser) => {
  const db = await getConnection();
  const user = await db.collection('users').insertOne({ ...data });
  return { id: user.insertedId, ...data };
};

export default { create };