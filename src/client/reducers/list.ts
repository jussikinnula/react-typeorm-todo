import { Todo } from '../../models';

export default (state: Todo[] = [], action: any = {}) => {
  if (action.type === 'LIST_FETCHED' && action.payload.todos) return action.payload.todos;
  return state;
};
