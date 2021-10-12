const Joi = require('joi');

const createUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  age: Joi.number().required(),
});

const userLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const createMovie = Joi.object({
  title: Joi.string().required(),
  length: Joi.number().required(),
  year: Joi.number().required(),
});

module.exports = { createUser, userLogin, createMovie }