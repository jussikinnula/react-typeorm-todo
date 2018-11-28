import * as path from 'path';
import { ConnectionOptions } from '@jussikinnula/typeorm';
import { TYPEORM_URL } from '../env';

const srcPath = path.resolve(__dirname, '../');

let params: any = {};
if (process.env.USE_TYPEORM_URL) {
  console.log('Using TYPEORM_URL')
  params = {
    type: 'postgres',
    url: TYPEORM_URL
  };
} else {
  params = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: '',
    password: '',
    database: 'react-typeorm-test',    
  }
}

const options: ConnectionOptions = {
  ...params,
  entities: [`${srcPath}/models/*.ts`],
  migrations: [`${srcPath}/migrations/*.ts`],
  synchronize: true,
};

export default options;
