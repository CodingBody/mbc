const Joi = require("joi");

module.exports.login = Joi.object().keys({
  workspace_name: Joi.string().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  remember: Joi.boolean(),
});

module.exports.createContent = Joi.object().keys({
  Language: Joi.string().required(),
  cp_name: Joi.string().required(),
  category: Joi.string().required(),
  title: Joi.string().required(),
  artist_list: Joi.string().required(),
  genre_list: Joi.string().required(),
  usageyn: Joi.string().required(),
  story: Joi.string().required(),
  episode: Joi.string().required(),
  priority: Joi.string().required(),
});
