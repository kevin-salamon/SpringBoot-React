/* eslint-disable import/no-anonymous-default-export */
import {
    SET_NAV_MENU_SHOW,
} from '../Constants/actionTypes';

const initialState = {
    navMenuShow: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NAV_MENU_SHOW:
            return {
                ...state,
                navMenuShow: action.payload
            };
        default:
            return state;
    }
  };