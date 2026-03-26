import express from 'express';
import {
  getFeedbacksController,
  createFeedbackController,
} from '../controllers/feedbacksController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', getFeedbacksController);
router.post('/', authenticate, createFeedbackController);

export default router;
