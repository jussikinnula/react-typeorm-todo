import { Todo } from '../../models';

export default (state: Todo = null, action: any = {}) => {
  if (action.type === 'TODO_FETCHED' && action.payload.todo) return action.payload.todo;
  return state;
};
