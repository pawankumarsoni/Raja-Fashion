import { put, call, fork, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
    REGISTER_REQUEST,
    registerSuccess,
    registerFailed
} from '../actions/Register';

const config = JSON.stringify({
    apiUrl: 'http://localhost:4000'
})

function removeUser() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function registerRequestAPICall(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text;
        if (!response.ok) {
            if (response.status === 401) {
                // auto remove if 401 response returned from api
                removeUser();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        } else {
            return { success: true, message: "user has created" };
        }
    });
}

function* registerRequest(action) {
    try {
        const user = yield call(registerRequestAPICall, action.payload);
        if (user.success) {
            yield put(registerSuccess(user.message));
            yield put(push('/login'));

        } else {
            yield put(registerFailed("An error occured"));
        }
    } catch (error) {
        yield put(registerFailed(error.toString()));
    }
}

function* registerRequestListener() {
    yield takeLatest(REGISTER_REQUEST, registerRequest);
}

export default function* registerSaga() {
    yield fork(registerRequestListener);
}
