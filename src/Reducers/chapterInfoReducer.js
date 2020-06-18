import {
  FETCH_CHAPTER_INFO,
  FETCH_CHAPTER_VOLUNTEERS,
  FETCH_CHAPTER_REUNIONS,
  FETCH_PENDING_VOLUNTEERS,
  FETCH_CHAPTER_INFO_ERROR,
  FETCH_CHAPTER_VOLUNTEERS_ERROR,
  FETCH_CHAPTER_REUNIONS_ERROR,
  FETCH_PENDING_VOLUNTEERS_ERROR,
  RECEIVE_CHAPTER_INFO,
  RECEIVE_CHAPTER_VOLUNTEERS,
  RECEIVE_CHAPTER_REUNIONS,
  RECEIVE_PENDING_VOLUNTEERS
} from "../Actions/ChapterPageActions";

const initialState = {
  chapterInfo: {
    isFetching: true,
    chapterInfo: {},
    error: '',
  },
  leader: "",
  volunteers: {
    isFetching: true,
    volunteers: [],
    error: '',
  },
  reunions: {
    isFetching: true,
    reunions: [],
    error: '',
  },
  pendingVols: {
    isFetching: true,
    pendingVols: [],
    error: '',
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
    case FETCH_CHAPTER_INFO_ERROR:
      return {
        ...state,
        chapterInfo: {
          ...state.chapterInfo,
          isFetching: false
        }
      }
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
    case FETCH_CHAPTER_VOLUNTEERS_ERROR:
      return {
        ...state,
        volunteers: {
          ...state.volunteers,
          isFetching: false
        }
      }
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
    case FETCH_CHAPTER_REUNIONS_ERROR:
      return {
        ...state,
        reunions: {
          ...state.reunions,
          isFetching: false
        }
      }
    case FETCH_PENDING_VOLUNTEERS:
      return {
        ...state,
        pendingVols: {
          pendingVols: [],
          isFetching: true
        }
      }
    case RECEIVE_PENDING_VOLUNTEERS:
      return {
        ...state,
        pendingVols: {
          pendingVols: action.payload,
          isFetching: false
        }
      }
    case FETCH_PENDING_VOLUNTEERS_ERROR:
      return {
        ...state,
        pendingVols: {
          ...state.pendingVols,
          isFetching: false
        }
      }
    default:
      return state;
  }
};
