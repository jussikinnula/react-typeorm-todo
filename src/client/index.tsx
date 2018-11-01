import 'reflect-metadata';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './components/App'
import configureStore from './configureStore'

const element = document.createElement('div');
document.body.appendChild(element);
const history = createHistory();
const { store } = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
);
