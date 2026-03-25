import express from 'express';

import {
  getMe,
  getUser,
  getUserLocationsController,
} from '../controllers/usersController.js';

import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.get('/me', authenticate, getMe);

router.get('/:userId', getUser);
router.get('/:userId/locations', getUserLocationsController);

export default router;
