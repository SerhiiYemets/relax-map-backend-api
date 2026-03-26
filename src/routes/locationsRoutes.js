import express from 'express';

import {
  createLocationController,
  getLocationsController,
  getLocationController,
  updateLocationController,
} from '../controllers/locationsController.js';

import { authenticate } from '../middleware/authenticate.js';
import { validateBody } from '../middleware/validateBody.js';

import {
  createLocationSchema,
  updateLocationSchema,
} from '../validations/locationsValidation.js';

const router = express.Router();

router.get('/', getLocationsController);
router.get('/:locationId', getLocationController);

router.post(
  '/',
  authenticate,
  validateBody(createLocationSchema),
  createLocationController
);

router.patch(
  '/:locationId',
  authenticate,
  validateBody(updateLocationSchema),
  updateLocationController
);

export default router;
