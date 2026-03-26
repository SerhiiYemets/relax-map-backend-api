import Joi from 'joi';

export const createFeedbackSchema = Joi.object({
  locationId: Joi.string().length(24).required(),
  rate: Joi.number().min(1).max(5).required(),
  description: Joi.string().min(5).required(),
});
