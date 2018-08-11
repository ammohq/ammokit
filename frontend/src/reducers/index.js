import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import auth from "./auth";

import {AUTH_LOGOUT} from "../actions";


const rootReducer = combineReducers({
  auth,
  form: formReducer
});


export default (state, action) => {
  if (action.type === AUTH_LOGOUT) {
    state = undefined;
  }
  return rootReducer(state, action)
};

