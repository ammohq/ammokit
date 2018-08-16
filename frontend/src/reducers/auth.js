import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_OK,
  AUTH_LOGOUT_OK,
  AUTH_PASSWORD_RESET_FAIL,
  AUTH_PASSWORD_RESET_OK,
  AUTH_SEND_PASSWORD_RESET_FAIL,
  AUTH_SEND_PASSWORD_RESET_OK
} from "../actions";

import {TOKEN} from "../settings";

const initialState = {
  authenticating: false,
  authenticated: !!localStorage.getItem(TOKEN),

  error: false,
  errorMessage: null
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case AUTH_LOGIN_OK: {
      const {token} = action.payload;
      localStorage.setItem(TOKEN, token);
      return {
        ...state,
        authenticating: false,
        authenticated: true,
        data: token,
        error: false,
        errorMessage: null
      }
    }

    case AUTH_LOGIN_FAIL: {
      return {
        ...state,
        authenticating: false,
        authenticated: false,
        error: true,
        errorMessage: action.message
      }
    }

    case AUTH_LOGOUT_OK: {
      localStorage.removeItem(TOKEN);
      return {
        ...state,
        authenticated: false
      }
    }

    // unused because of Saga Promise-resolve/reject
    case AUTH_SEND_PASSWORD_RESET_FAIL:
    case AUTH_SEND_PASSWORD_RESET_OK:
    case AUTH_PASSWORD_RESET_OK:
    case AUTH_PASSWORD_RESET_FAIL: {
      return state;
    }

    default: {
      return state;
    }
  }
}
