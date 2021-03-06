import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {reducers} from './stores/reducers';
import thunk from "redux-thunk";

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
