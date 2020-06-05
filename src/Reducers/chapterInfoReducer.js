import {
  FETCH_CHAPTER_INFO,
  FETCH_CHAPTER_VOLUNTEERS,
  FETCH_CHAPTER_REUNIONS,
  RECEIVE_CHAPTER_INFO,
  RECEIVE_CHAPTER_VOLUNTEERS,
  RECEIVE_CHAPTER_REUNIONS,
} from "../Actions/ChapterPageActions";

const initialState = {
  chapterInfo: {
    isFetching: true,
    chapterInfo: {},
  },
  leader: "",
  volunteers: {
    isFetching: true,
    volunteers: [],
  },
  reunions: {
    isFetching: true,
    reunions: [],
  },
};

export const chapterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAPTER_INFO:
      return {
        ...state,
        chapterInfo: {
          ...state.chapterInfo,
          isFetching: true,
        },
      };
    case RECEIVE_CHAPTER_INFO:
      return {
        ...state,
        chapterInfo: {
          chapterInfo: action.payload,
          isFetching: false,
        },
      };
    case FETCH_CHAPTER_VOLUNTEERS:
      return {
        ...state,
        volunteers: {
          ...state.volunteers,
          isFetching: true,
        },
      };
    case RECEIVE_CHAPTER_VOLUNTEERS:
      return {
        ...state,
        volunteers: {
          volunteers: action.payload.volunteers,
          isFetching: false,
        },
        leader: action.payload.leaders[0],
      };
    case FETCH_CHAPTER_REUNIONS:
      return {
        ...state,
        reunions: {
          ...state.reunions,
          isFetching: true,
        },
      };
    case RECEIVE_CHAPTER_REUNIONS:
      return {
        ...state,
        reunions: {
          reunions: action.payload,
          isFetching: false,
        },
      };
    default:
      return state;
  }
};
