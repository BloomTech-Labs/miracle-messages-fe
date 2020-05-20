import { mapReducer } from './mapReducer';
import { combineReducers } from 'redux';
import { formReducer } from './FormReducer';
import { loginReducer } from './LoginReducer';
import { ChapterReducer } from './ChapterReducer';
import { chapterInfoReducer } from './chapterInfoReducer'
import { volunteersReducer} from './VolunteersReducer';
import { usersReducer } from './UserReducer';
import { partnerReducer } from './partnerReducer';
import { searchBarReducer } from "../Reducers/SearchBarReducer.js"; 



export default combineReducers({
    mapReducer,
    formReducer,
    loginReducer,
    ChapterReducer,
    volunteersReducer,
    usersReducer,
    partnerReducer,
    searchBarReducer,
    chapterInfoReducer
 });