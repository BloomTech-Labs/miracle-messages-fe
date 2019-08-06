import { mapReducer } from './mapReducer';
import { combineReducers } from 'redux';
import { formReducer } from './formReducer';


export default combineReducers({
    mapReducer,
    formReducer
 });