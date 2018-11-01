import { NOT_FOUND } from 'redux-first-router'
import axios from 'axios';
import { Todo } from '../models';

export default {
  LIST: {
    path: '/',
    thunk: async (dispatch: Function) => {
      try {
        const response = await axios('/api/todo');
        const todos = response.data.todos as Todo[];
        dispatch({ type: 'LIST_FETCHED', payload: { todos }});
      } catch (error) {
        dispatch({ type: 'ERROR', payload: { error: error.message } });
      }
    }
  },
  TODO: {
    path: '/:id',
    thunk: async (dispatch: Function, getState: Function) => {
      const { location: { payload: { id } } } = getState();
      try {
        const response = await axios(`/api/todo/${id}`);
        const todo = response.data as Todo;
        if (!todo || !todo.id) {
          dispatch({ type: NOT_FOUND });
        } else {
          dispatch({ type: 'TODO_FETCHED', payload: { todo }});
        }
      } catch (error) {
        dispatch({ type: 'ERROR', payload: { error: error.message } });
      }
    }
  }
}