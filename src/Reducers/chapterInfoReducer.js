import {
  FETCH_CHAPTER_INFO,
  FETCH_CHAPTER_VOLUNTEERS,
  FETCH_CHAPTER_REUNIONS
} from "../Actions/ChapterPageActions";


const initialState = {
  chapterInfo: {
      isFetching: true,
      chapterInfo: {}
    },
  volunteers: {
      isFetching: true,
      volunteers: []
    },
  reunions: {
    isFetching: true,
    reunions: []
  }
}


export const chapterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_CHAPTER_INFO:
        return {
          ...state,
          chapterInfo: {
            isFetching: false,
            chapterInfo: action.payload
          }
        } 
      case FETCH_CHAPTER_VOLUNTEERS:
        return {
          ...state,
          volunteers: {
            isFetching: false,
            volunteers: action.payload
          }
        } 
      case FETCH_CHAPTER_REUNIONS:
        return {
          ...state,
          reunions: {
            isFetching: false,
            reunions: action.payload
          }
        }
      default:
        return state
      }
    }


