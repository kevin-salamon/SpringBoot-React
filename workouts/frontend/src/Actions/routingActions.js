import { 
    SET_PAGE_SELECTED,
    SET_BACKGROUND_COLOR,
    SET_FONT_COLOR
} from '../Constants/actionTypes';

export function setPageSelected(page) {
    return dispatch => {
        return dispatch({
            type: SET_PAGE_SELECTED,
            payload: page
        })
    }
};

export function setBackgroundColor(color) {
    return dispatch => {
        return dispatch({
            type: SET_BACKGROUND_COLOR,
            payload: color
        })
    }
};
export function setFontColor(color) {
    return dispatch => {
        return dispatch({
            type: SET_FONT_COLOR,
            payload: color
        })
    }
};