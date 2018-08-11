import {call, put, take} from 'redux-saga/effects'
import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_OK,
  AUTH_LOGOUT,
  AUTH_LOGOUT_OK,
  AUTH_REGISTER,
  AUTH_REGISTER_FAIL,
  AUTH_REGISTER_OK,
} from "../actions";
import apiClient from "../api-client";


export function* loginWorker({data, resolve, reject}) {
  try {
    const response = yield call(apiClient.post, 'auth/login/', data);
    yield put({type: AUTH_LOGIN_OK, payload: response.data});
    yield call(resolve);
  } catch (error) {
    yield put({type: AUTH_LOGIN_FAIL, payload: error.response.data});
    yield call(reject, {errors: error.response.data});
  }
}

export function* login() {
  while (true) {
    const request = yield take(AUTH_LOGIN);
    yield call(loginWorker, request);
  }
}


export function* registerWorker({data, resolve, reject}) {
  try {
    const response = yield call(apiClient.post, `auth/register/`, data);
    yield put({type: AUTH_REGISTER_OK, data: response.data});
    yield call(resolve, response.data);
  } catch (error) {
    yield put({
      type: AUTH_REGISTER_FAIL,
      payload: error.response.data
    });
    yield call(reject, {errors: error.response.data});
  }
}

export function* register() {
  while (true) {
    const request = yield take(AUTH_REGISTER);
    yield call(registerWorker, request);
  }
}


export function* logout() {
  while (true) {
    yield take(AUTH_LOGOUT);
    yield put({type: AUTH_LOGOUT_OK})
  }
}

