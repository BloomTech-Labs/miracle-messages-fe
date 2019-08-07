import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './CSS/index.css';
import App from './App';
import VolunteerForm from './Map_Componenets/VolunteerForm';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import combineReducers from './Reducers';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger),
  // other store enhancers if any
);
const store = createStore(combineReducers, enhancer);

// const store = createStore(
//     // name of reducers 
//     combineReducers,
//     applyMiddleware(thunk, logger),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

console.log(store)

ReactDOM.render(
    <Provider store={store}>
        <Router>
          <App />
            {/* <Route exact path = "/" component ={App} />
            <Route path ="/form" component ={VolunteerForm} /> */}
        </Router>       
    </Provider>, 
    document.getElementById('root')
   );


// ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
