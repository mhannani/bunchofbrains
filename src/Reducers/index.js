import {combineReducers} from 'redux';
import sessionReducer from './session';
import popUpReducer from "./popUp";

const rootReducer = combineReducers({
    sessionState: sessionReducer,
    popUpState: popUpReducer
});

export default rootReducer;