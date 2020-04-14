import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} from '../actions/Login';

const initialState = {
    loading: false,
    message: null
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, message: null };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, message: "Login successfully" };
        case LOGIN_FAILED:
            return { ...state, loading: false, message: action.payload };
        case LOGOUT:
            return { ...state, loading: false, message: null };
        default:
            return state;
    }
};

export default login;
