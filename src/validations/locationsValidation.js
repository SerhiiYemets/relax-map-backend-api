import Joi from 'joi';

export const createLocationSchema = Joi.object({
  name: Joi.string().min(3).required(),
  image: Joi.string().uri().required(),
  description: Joi.string().min(10).required(),
  locationType: Joi.string().required(), // slug
  region: Joi.string().required(),       // slug

  coordinates: Joi.object({
    lat: Joi.number().required(),
    lon: Joi.number().required(),
  }).required(),
});

export const updateLocationSchema = Joi.object({
  name: Joi.string().min(3),
  image: Joi.string().uri(),
  description: Joi.string().min(10),
  locationType: Joi.string(),
  region: Joi.string(),

  coordinates: Joi.object({
    lat: Joi.number(),
    lon: Joi.number(),
  }),
});
