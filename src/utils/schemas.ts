import JoiImport from 'joi';
import DateExtension from '@joi/date';

const joi = JoiImport.extend(DateExtension);

const signUpSchema = joi.object({
  email: joi.string().required(),
  password: joi
    .string()
    .pattern(/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/, {
      invert: true,
    })
    .required(),
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

const cardSchema = joi.object({
  title: joi.string().required(),
  number: joi.string().required(),
  cardholderName: joi.string().required(),
  securityCode: joi
    .string()
    .pattern(/^[0-9]{3}$/)
    .required(),
  expirationDate: joi.date().format('MM/YY').required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().valid('credit', 'debit', 'credit/debit').required(),
});

export { signUpSchema, credentialSchema, noteSchema, wifiSchema, cardSchema };
