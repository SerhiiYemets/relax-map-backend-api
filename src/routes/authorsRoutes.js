import express from 'express';
import { getAuthors } from '../controllers/authorsController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: Authors API
 */

/**
 * @swagger
 * /api/authors:
 *   get:
 *     summary: Get all authors
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: List of authors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', getAuthors);

export default router;
