import {

} from '../Constants/actionTypes';

const initialState = {
    workouts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    //   case SET_PAGE_SELECTED:
    //       return {
    //           ...state,
    //           pageSelected: action.payload
    //       };
    // case SET_BACKGROUND_COLOR:
    //     return {
    //         ...state,
    //         backgroundColor: action.payload
    //     };
    //     case SET_FONT_COLOR:
    //         return {
    //             ...state,
    //             fontColor: action.payload
    //         };  
      default:
          return state;
  }
};
