/* eslint-disable import/no-anonymous-default-export */
import {
    SET_PAGE_SELECTED,
} from '../Constants/actionTypes';

const initialState = {
    pageSelected: 'login'
};

export default (state = initialState, action) => {
  switch (action.type) {
      case SET_PAGE_SELECTED:
          return {
              ...state,
              pageSelected: action.payload
          };
      default:
          return state;
  }
};
  