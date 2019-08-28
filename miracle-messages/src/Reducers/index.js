import { mapReducer } from './mapReducer';
import { combineReducers } from 'redux';
import { formReducer } from './FormReducer';
import { loginReducer } from './LoginReducer';
import { ChapterReducer } from './ChapterReducer';
import { voluntReducer} from './voluntReducer';
import { usersReducer } from './UserReducer';
import { partnerReducer } from './partnerReducer';




export default combineReducers({
    mapReducer,
    formReducer,
    loginReducer,
    ChapterReducer,
    voluntReducer,
    usersReducer,
    partnerReducer
 });