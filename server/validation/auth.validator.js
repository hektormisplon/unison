const Joi = require('@hapi/joi')

const validateSignup = data =>
  Joi.object({
    email: Joi.string().min(6).required().email(),
  }).validate(data)

const validateSignin = data =>
  Joi.object({
    email: Joi.string().min(6).required().email(),
  }).validate(data)

module.exports.validateSignup = validateSignup
module.exports.validateSignup = validateSignin
