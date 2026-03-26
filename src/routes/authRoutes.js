import express from 'express';

import {
  register,
  login,
  logout,
  refresh,
} from '../controllers/authController.js';

import { authenticate } from '../middleware/authenticate.js';
import { validateBody } from '../middleware/validateBody.js';
import {
  registerSchema,
  loginSchema,
} from '../validations/authValidation.js';

const router = express.Router();

router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);

router.post('/logout', authenticate, logout);
router.post('/refresh', refresh);

export default router;
