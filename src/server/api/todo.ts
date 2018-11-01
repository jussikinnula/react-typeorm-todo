import * as express from 'express';
import { getManager } from 'typeorm';
import { Todo } from '../../models';
import notFound from './notFound';

const router = express.Router();
router.get('/', findAllTodos);
router.post('/', createTodo);
router.get('/:id', findTodo);
router.put('/:id', updateTodo);
router.get('*', notFound);
export default router;

async function findAllTodos(_req: express.Request, res: express.Response) {
  const todoRepository = getManager().getRepository(Todo);
  const todos = await todoRepository.find();
  res.send({ todos });
}

async function createTodo(req: express.Request, res: express.Response) {
  const { title = '', description = '', done = false } = req.body;
  const todoRepository = getManager().getRepository(Todo);
  const todo = await todoRepository.save({ title, description, done });
  res.send(todo);
}

async function findTodo(req: express.Request, res: express.Response) {
  const { id } = req.params;
  const todoRepository = getManager().getRepository(Todo);
  const todo = await todoRepository.findOne({ id });
  res.send(todo);
}

async function updateTodo(req: express.Request, res: express.Response) {
  const { id } = req.params;
  const { title, description, done } = req.body;
  const todoRepository = getManager().getRepository(Todo);
  const todo = await todoRepository.findOne({ id });
  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (done !== undefined) todo.done = done;
  todoRepository.save(todo);
  res.send(todo);
}
