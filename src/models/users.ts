import getConnection from './connection';
import { ObjectId } from 'mongodb';

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

const getAll = async () => {
  const db = await getConnection();
  const users = await db.collection('users').find().toArray();
  return users;
};

const getById = async (id: string) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  const users = await db.collection('users').findOne({ _id: new ObjectId(id) });
  return users;
};

const findByName = async (name: string) => {
  const db = await getConnection();
  const users = await db.collection('users').findOne({ name });
  return users;
};

const findByEmail = async (email: string) => {
  const db = await getConnection();
  const users = await db.collection('users').findOne({ email });
  return users;
};

export default { create, getAll, getById, findByEmail, findByName };