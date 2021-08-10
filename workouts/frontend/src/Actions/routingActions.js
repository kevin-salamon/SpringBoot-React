import { 
    SET_PAGE_SELECTED
} from '../Constants/actionTypes';

export const setPageSelected = (page) => ({
    type: SET_PAGE_SELECTED,
    payload: page
});