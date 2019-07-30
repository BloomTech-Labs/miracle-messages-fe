import { 
    FETCH_CHAPTER_INFO, 
    FETCH_CHAPTER_SUCCESS,
     FETCH_CHAPTER_FAIL, 
    
    } from "../Actions/index";

//chapter reducer x 
//viewport reducer
//popup reducer
//learn more reducer
//join chapter/sign up to volunteer.
//create chapter

    const initialState = {
        viewport: {
            latitude: 37.785164,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0
          },
          chapter_data: [], //this gets populated with componentDidMount
          popupInfo: null, //null means no pop-ups are being rendered for any of the cities
          learnMore: false,
          fetching: false,
          error: true  //learn more is a toggleinside the pop-ups
    };

     export const chapterReducer = (state = initialState, action )=>{

        console.log('hi')

        switch (action.type){
            case FETCH_CHAPTER_INFO:
            return {
                ...state, 
                fetching: true,
                error: null
            };

            case FETCH_CHAPTER_SUCCESS:
            return {
                ...state,
                chapter_data: action.payload,
                fetching:false,
                error: null
            };

            case FETCH_CHAPTER_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
            default:
            return state;
        }

    }



    // export default chapterReducer