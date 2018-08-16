import {all} from 'redux-saga/effects'
import {
  login,
  logout,
  register,
  resetPassword,
  sendPasswordReset
} from "./auth";


export default function* rootSaga() {
  yield all([
    login(),
    logout(),
    sendPasswordReset(),
    resetPassword(),
    register()
  ])
}