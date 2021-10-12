import getConnetion from './connection';
import { ObjectId } from 'mongodb';

interface createMovie {
  title: string,
  length: number,
  year: number,
}

const create = async (data: createMovie) => {
  const db = await getConnetion();
  const movie = await db.collection('movies').insertOne({ ...data })
  return { id: movie.insertedId, ...data };
};

const getAll = async () => {
  const db = await getConnetion();
  const movies = await db.collection('movies').find().toArray();
  return movies;
}

const getById = async (id: string) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await getConnetion();
  const movie = await db.collection('movies').findOne({ _id: new ObjectId(id) })
  return movie;
}

export default { create, getAll, getById }