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

export { signUpSchema, credentialSchema };
