const Joi = require("joi");

module.exports.loginValidator = Joi.object().keys({
  workspace_name: Joi.string().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  remember: Joi.boolean(),
});
