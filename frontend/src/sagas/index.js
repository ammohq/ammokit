import {all} from 'redux-saga/effects'
import {login, logout, register} from "./auth";

export default function* rootSaga() {
  yield all([
    login(),
    logout(),
    register()
  ])
}