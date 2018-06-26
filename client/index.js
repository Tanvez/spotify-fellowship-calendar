import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'



import App from './App'

import reducer from './store'

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
