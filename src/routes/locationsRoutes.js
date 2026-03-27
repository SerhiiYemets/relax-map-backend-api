import express from 'express';
import {
  getLocationsController,
  getLocationController,
  createLocationController,
  updateLocationController,
  deleteLocationController,
} from '../controllers/locationsController.js';

import { authenticate } from '../middleware/authenticate.js';
import { validateBody } from '../middleware/validateBody.js';
import {
  createLocationSchema,
  updateLocationSchema,
} from '../validations/locationsValidation.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Locations
 *   description: API for managing locations
 */

/**
 * @swagger
 * /api/locations:
 *   get:
 *     summary: Get all locations
 *     tags: [Locations]
 *     responses:
 *       200:
 *         description: List of locations
 */
router.get('/', getLocationsController);

/**
 * @swagger
 * /api/locations/{locationId}:
 *   get:
 *     summary: Get location by ID
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: locationId
 *         required: true
 *         schema:
 *           type: string
 *         description: Location ID
 *     responses:
 *       200:
 *         description: Location found
 *       404:
 *         description: Location not found
 */
router.get('/:locationId', getLocationController);

/**
 * @swagger
 * /api/locations:
 *   post:
 *     summary: Create a new location
 *     tags: [Locations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "Nice park"
 *             description: "Good place to relax"
 *             regionId: "123"
 *             locationTypeId: "456"
 *     responses:
 *       201:
 *         description: Location created
 *       401:
 *         description: Unauthorized
 */
router.post(
  '/',
  authenticate,
  validateBody(createLocationSchema),
  createLocationController
);

/**
 * @swagger
 * /api/locations/{locationId}:
 *   patch:
 *     summary: Update location
 *     tags: [Locations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: locationId
 *         required: true
 *         schema:
 *           type: string
 *         description: Location ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "Updated name"
 *             description: "Updated description"
 *     responses:
 *       200:
 *         description: Location updated
 *       404:
 *         description: Not found
 */
router.patch(
  '/:locationId',
  authenticate,
  validateBody(updateLocationSchema),
  updateLocationController
);

/**
 * @swagger
 * /api/locations/{locationId}:
 *   delete:
 *     summary: Delete location
 *     tags: [Locations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: locationId
 *         required: true
 *         schema:
 *           type: string
 *         description: Location ID
 *     responses:
 *       200:
 *         description: Location deleted
 *       404:
 *         description: Not found
 */
router.delete('/:locationId', authenticate, deleteLocationController);

export default router;
