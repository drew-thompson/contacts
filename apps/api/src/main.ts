/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { Express } from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const server = express();

export const bootstrap = async (expressInstance: Express) => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance), { cors: true });
  const globalPrefix = environment.production ? 'h2o-challenge/us-central1/api' : 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  return (await app.init()).listen(port);
};

bootstrap(server)
  .then(v => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);
