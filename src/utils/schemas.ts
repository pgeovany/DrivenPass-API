import joi from 'joi';

const signUpSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

export { signUpSchema };
