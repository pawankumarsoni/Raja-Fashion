import { put, call, fork, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
    LOGIN_REQUEST,
    loginSuccess,
    loginFailed,
    LOGOUT
} from '../actions/Login';

const config = JSON.stringify({
    apiUrl: 'http://localhost:4000'
})

function loginRequestAPICall(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', (JSON.stringify(user)));

            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text;
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

function* loginRequest(action) {    
    try {
        const user = yield call(loginRequestAPICall, action.payload);
        const user_detail = JSON.parse(user);
        if (user_detail.id) {
            localStorage.setItem('jwt', user_detail.token);
            yield put(loginSuccess(user_detail));
            if (user_detail.token) {
                yield put(push('/'));
            }
        } else {
            yield put(loginFailed("Login failed"));
        }
    } catch (error) {
        yield put(loginFailed(error.toString()));
    }
}

function* loginRequestListener() {
    yield takeLatest(LOGIN_REQUEST, loginRequest);
}

function logout() {
    return new Promise(resolve => {
        window.localStorage.removeItem("jwt");
        resolve(true)
    })
}

function* logoutRequest() {
    try {
        let loggedOut = yield call(logout);
        if (loggedOut) {
            yield put(push('/login'));
        }
    } catch (error) {
        console.log(error)
    }
}

function* logoutRequestListener() {
    yield takeLatest(LOGOUT, logoutRequest);
}

export default function* authSaga() {
    yield fork(loginRequestListener);
    yield fork(logoutRequestListener);
}
