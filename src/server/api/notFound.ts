import * as express from 'express';

export default async (_req: express.Request, res: express.Response) => {
  res.sendStatus(404);
};
