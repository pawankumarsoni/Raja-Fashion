import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import login from './Login';
import register from './Register';

/* ------------- Assemble The Reducers ------------- */
const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        login,
        register
    });

export default rootReducer;
