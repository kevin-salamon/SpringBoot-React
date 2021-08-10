import { 
    SET_PAGE_SELECTED
} from '../Constants/actionTypes';

export function setPageSelected(page) {
    return dispatch => {
        return dispatch({
            type: SET_PAGE_SELECTED,
            payload: page
        })
    }
};