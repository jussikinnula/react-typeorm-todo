import direction from './direction';
import todo from './todo';
import list from './list';
import page from './page';
import transitionActive from './transitionActive';
import { Todo } from '../../models';

export interface RootState {
  direction: string;
  todo: Todo;
  list: Todo[];
  page: string;
  location: any;
}

export default { direction, todo, list, page, transitionActive };
