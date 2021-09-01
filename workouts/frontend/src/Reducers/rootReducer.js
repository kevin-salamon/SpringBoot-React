import { combineReducers } from 'redux';
import routingReducer from './routingReducer';
import workoutReducer from './workoutReducer';
import viewReducer from './viewReducer';

export default combineReducers({
    workoutReducer,
    routingReducer,
    viewReducer
});