import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'

import reducer from './store'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store = {store}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
