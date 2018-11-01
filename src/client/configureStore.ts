import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import routesMap from './routesMap';
import reducers from './reducers';

declare var window: any;
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default (history: any, preLoadedState: any = {}) => {
  const { reducer, middleware, enhancer, thunk } = connectRoutes(history, routesMap);
  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, preLoadedState, enhancers);
  return { store, thunk }
}