import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import searchReducer from './reducers/search';
import slideShowReducer from './reducers/slideShow';
import './index.css';
import App from './App';

const store = createStore(
  combineReducers({ searchReducer, slideShowReducer }),
  applyMiddleware(thunkMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
