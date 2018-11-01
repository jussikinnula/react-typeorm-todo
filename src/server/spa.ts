import * as express from 'express';
import * as path from 'path';
const root = path.join(__dirname, '../../target');

export default (_req: express.Request, res: express.Response) => {
  res.sendFile('index.html', { root });
};
