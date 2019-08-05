import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './CSS/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import formReducer from './reducers/FormReducer';
import VolunteerForm from './components/VolunteerForm';


const store = createStore(formReducer, applyMiddleware(thunk,logger));


const rootElement = document.getElementById("root");

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Route exact path = "/" component={App} />
        <Route path = "/form" component={VolunteerForm} />
    </Router>
</Provider>,
rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
