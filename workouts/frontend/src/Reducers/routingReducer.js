/* eslint-disable import/no-anonymous-default-export */
import {
    SET_PAGE_SELECTED,
} from '../Constants/actionTypes';

const initialState = {
    pageSelcted: 'overview'
};

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_PAGE_SELECTED: {
        return {
          ...state,
          pageSelected: action.paylaod
        }
      }
      default:
        return state;
    }
};
  