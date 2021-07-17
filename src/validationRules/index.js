const Joi = require('joi');

module.exports = {
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),
  getBooks: Joi.object({
    limit: Joi.number().integer().required()
  }),
  getBookByID: Joi.object({
    id: Joi.number().required()
  })
};
