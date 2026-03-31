import express from 'express';

import {
  createFeedback,
  getFeedbacks,
} from '../controllers/feedbacksController.js';

import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Feedbacks
 *   description: Feedback API
 */

/**
 * @swagger
 * /api/feedbacks:
 *   get:
 *     summary: Get all feedbacks
 *     tags: [Feedbacks]
 *     responses:
 *       200:
 *         description: List of feedbacks
 */
router.get('/', getFeedbacks);

/**
 * @swagger
 * /api/feedbacks:
 *   post:
 *     summary: Create feedback
 *     tags: [Feedbacks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             locationId: "65f123abc"
 *             rate: 5
 *             description: "Amazing place!"
 *     responses:
 *       201:
 *         description: Feedback created
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/', authenticate, createFeedback);

export default router;
