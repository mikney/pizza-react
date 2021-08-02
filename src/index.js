import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './redux/store'
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true, traceLimit: 25
        }) : compose;

const storer = createStore(
    store,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


ReactDOM.render(
  <BrowserRouter>
      <Provider store={storer} >
        <App />
      </Provider>
  </BrowserRouter> ,
  document.getElementById('root')
);

