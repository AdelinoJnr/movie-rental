import getConnetion from './connection';

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

export default { create, getAll }