import Movie from '../models/movies';
import Schema from '../utils/schema';

interface createMovie {
  title: string,
  length: number,
  year: number,
}

const create = async (data: createMovie) => {
  const { error } = Schema.createMovie.validate(data);
  if (error) return { status: 400, message: 'Invalid entries!' }

  const movie = await Movie.create(data)
  return { status: 201, data: movie };
};

const getAll = async () => {
  const movies = await Movie.getAll();

  return { status: 200, data: movies }
};

const getById = async (id: string) => {
  const movie = await Movie.getById(id);
  if (!movie) return { status: 404, message: 'Movie does not exist!' };

  return { status: 200, data: movie }
};

export default { create, getAll, getById };