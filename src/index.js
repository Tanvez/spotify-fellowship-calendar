import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'

import reducer from './store'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
