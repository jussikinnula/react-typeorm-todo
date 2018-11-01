import * as express from 'express';
import todo from './todo';
import notFound from './notFound';

const router = express.Router();
router.use('/todo', todo);
router.get('*', notFound);
export default router;