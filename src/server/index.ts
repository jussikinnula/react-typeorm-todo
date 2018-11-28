import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import { createConnection } from '@jussikinnula/typeorm';
import typeOrmConfig from './typeOrmConfig';

import api from './api';
import assets from './assets';
import spa from './spa';
import { PORT } from '../env';


(async function() {
  const app = express();
  app.set('json spaces', 2);
  app.use(bodyParser.json({ type: '*/*' }));

  app.use('/api', api);
  app.use('/assets', assets);
  app.get('*', spa);

  app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));

  try {
    await createConnection(typeOrmConfig);
    console.log('Database connection initialized');
  } catch (error) {
    console.error('Database connection failed', error)    ;
  }

})()