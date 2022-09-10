import joi from 'joi';

const signUpSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const credentialSchema = joi.object({
  title: joi.string().required(),
  url: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});

const noteSchema = joi.object({
  title: joi.string().required().max(50),
  note: joi.string().required().max(1000),
});

const wifiSchema = joi.object({
  title: joi.string().required(),
  name: joi.string().required().max(50),
  password: joi.string().required().max(50),
});

export { signUpSchema, credentialSchema, noteSchema, wifiSchema };
