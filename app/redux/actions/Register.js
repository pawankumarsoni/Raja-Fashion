export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export function registerRequest(userCredentials) {
    return {
        type: REGISTER_REQUEST,
        payload: userCredentials
    };
}

export function registerSuccess(userDetail) {
    return {
        type: REGISTER_SUCCESS,
        payload: userDetail
    };
}

export function registerFailed(error) {
    return {
        type: REGISTER_FAILED,
        payload: error
    };
}