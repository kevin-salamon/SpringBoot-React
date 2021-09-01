import { 
    SET_NAV_MENU_SHOW
} from '../Constants/actionTypes';

export function setNavMenuShow(bool) {
    return dispatch => {
        return dispatch({
            type: SET_NAV_MENU_SHOW,
            payload: bool
        })
    }
};