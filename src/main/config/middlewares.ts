import express, { Express } from 'express'

export const createMiddlewares = (app: Express): void => {
  app.use(express.json());
}