export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = "LOGOUT";

export function loginRequest(user) {
    return {
        type: LOGIN_REQUEST,
        payload: user 
    };
}

export function loginSuccess(userDetail) {
    return {
        type: LOGIN_SUCCESS,
        payload: userDetail
    };
}

export function loginFailed(error) {
    return {
        type: LOGIN_FAILED,
        payload: error
    };
}

export function logoutRequest() {
    return {
        type: LOGOUT
    };
}