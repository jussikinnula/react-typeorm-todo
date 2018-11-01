import { NOT_FOUND } from 'redux-first-router'

const components: any = {
  LIST: 'ListPage',
  TODO: 'TodoPage',
  ERROR: 'ErrorPage',
  [NOT_FOUND]: 'NotFoundPage'
}

export default (state: string = 'LIST', action: any = {}) => {
  if (components[action.type]) return components[action.type];
  return state;
};
