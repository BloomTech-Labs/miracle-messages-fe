import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './CSS/index.css';
import App from './App';
import thunk from 'redux-thunk';
// import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './Reducers';

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
//   // other store enhancers if any
// );
const store = createStore(combineReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// exposes store when run in Cypress
if (window.Cypress) {
  window.store = store;
}
