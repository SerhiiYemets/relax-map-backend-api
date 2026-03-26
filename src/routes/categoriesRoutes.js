import express from 'express';

import {
  getRegionsController,
  getLocationTypesController,
} from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/regions', getRegionsController);
router.get('/location-types', getLocationTypesController);

export default router;
