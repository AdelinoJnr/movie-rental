import Movie from '../models/movies';

interface createMovie {
  title: string,
  length: number,
  year: number,
}

const create = async (data: createMovie) => {
  const movie = await Movie.create(data)

  return { status: 201, data: movie };
};

const getAll = async () => {
  const movies = await Movie.getAll();

  return { status: 200, data: movies }
};

export default { create, getAll };