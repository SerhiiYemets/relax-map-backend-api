import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import locationsRoutes from './routes/locationsRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';
import feedbacksRoutes from './routes/feedbacksRoutes.js';
import authorsRoutes from './routes/authorsRoutes.js';

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import swaggerCustomCss from "./config/swaggerCustomCss.js";

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

app.use(express.json());
app.use(logger);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss: swaggerCustomCss,
    customSiteTitle: "Relax Map API Docs",
  }),
);

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/locations', locationsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/feedbacks', feedbacksRoutes);
app.use('/api/authors', authorsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
