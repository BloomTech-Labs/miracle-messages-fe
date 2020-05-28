import {
  FETCH_CHAPTER_INFO,
  FETCH_CHAPTER_VOLUNTEERS,
  FETCH_CHAPTER_REUNIONS
} from "../Actions/ChapterPageActions";


const initialState = {
  chapterInfo: [],
  volunteers: [],
  reunions: []
}


export const chapterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_CHAPTER_INFO:
        return {
          ...state,
          chapterInfo: action.payload
        } 
      case FETCH_CHAPTER_VOLUNTEERS:
        return {
          ...state,
          volunteers: action.payload
        } 
      case FETCH_CHAPTER_REUNIONS:
        return {
          ...state,
          reunions: action.payload
        }
      default:
        return state
      }
    }


