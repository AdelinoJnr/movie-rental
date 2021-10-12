import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import Movie from '../controllers/movies';
/* import dotenv from 'dotenv'; */
require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());

app.post('/movie', Movie.create);
app.get('/movie', Movie.getAll)

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));


