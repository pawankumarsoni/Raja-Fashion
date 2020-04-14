import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
} from '../actions/Register';

const initialState = {
    loading: false,
    message: null,
};

const register = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, loading: true, message: null };
        case REGISTER_SUCCESS:
            return { ...state, loading: false, message: action.payload };
        case REGISTER_FAILED:
            return { ...state, loading: false, message: action.payload };
        default:
            return state;
    }
};

export default register;
