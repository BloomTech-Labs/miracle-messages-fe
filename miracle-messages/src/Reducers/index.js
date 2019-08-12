import { mapReducer } from './mapReducer';
import { combineReducers } from 'redux';
import { formReducer } from './FormReducer';


export default combineReducers({
    mapReducer,
    formReducer
 });