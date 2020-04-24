const Joi = require('@hapi/joi')

const validateSignup = data =>
  Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
  }).validate(data)

const validateSignin = data =>
  Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }).validate(data)

module.exports.validateSignup = validateSignup
module.exports.validateSignin = validateSignin
