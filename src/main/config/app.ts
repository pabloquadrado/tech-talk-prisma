import express, { Express } from 'express'
import { createMiddlewares } from './middlewares';
import { createRoutes } from './routes';

export const createApp = async (): Promise<Express> => {
  const app = express();
  createMiddlewares(app);
  createRoutes(app);

  return app;
}