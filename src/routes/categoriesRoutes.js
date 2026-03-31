import express from 'express';

import {
  getRegionsController,
  getLocationTypesController,
} from '../controllers/categoriesController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Regions & Location Types API
 */

/**
 * @swagger
 * /api/regions:
 *   get:
 *     summary: Get all regions
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of regions
 */
router.get('/regions', getRegionsController);

/**
 * @swagger
 * /api/location-types:
 *   get:
 *     summary: Get all location types
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of location types
 */
router.get('/location-types', getLocationTypesController);

export default router;
