import { combineReducers } from 'redux';
import { alert } from './alertReducers';
import { auth } from './authReducers';

const rootReducer = combineReducers({
    alert,
    auth
});

export default rootReducer;
