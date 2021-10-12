import bodyParser from 'body-parser';
import express from 'express';
import Movie from '../controllers/movies';
import userRouter from '../routes/users';
import loginRouter from '../routes/login';

/* import dotenv from 'dotenv'; */
require('dotenv').config();

const { PORT = 3000 } = process.env;

const app = express();
app.use(bodyParser.json());

app.post('/movie', Movie.create);
app.get('/movie', Movie.getAll);

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));


