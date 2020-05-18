import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.scss"
import App from "./App"
import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import combineReducers from "./Reducers"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers,
  composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)

// exposes store when run in Cypress
if (window.Cypress) {
  window.store = store
}
