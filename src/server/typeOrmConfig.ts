import * as path from 'path';
import { ConnectionOptions } from 'typeorm';
import { TYPEORM_URL } from '../env';

const srcPath = path.resolve(__dirname, '../');

const options: ConnectionOptions = {
  type: 'postgres',
  url: TYPEORM_URL,
  entities: [`${srcPath}/models/*.ts`],
  migrations: [`${srcPath}/migrations/*.ts`],
  synchronize: true,
};

export default options;
