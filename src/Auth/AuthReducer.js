import { createReducer } from "reduxsauce";
import { Map } from "immutable";

import { AuthTypes as Types } from "./AuthActions";

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
  loginInfo: {
    email: "",
    name: "",
    picture: null,
    loggedIn: false,
  },
  loginError: {
    state: false,
    message: "",
  },
  signupError: {
    state: false,
    message: "",
  },
});

const resetState = () => INITIAL_STATE;

const saveLoginInfo = (state, { payload }) => {
  localStorage.setItem("token", payload.token);
  localStorage.setItem("email", payload.email);
  localStorage.setItem("name", payload.name);
  localStorage.setItem("picture", payload.picture);
  return state.merge(
    Map({
      loginInfo: { ...state.get("loginInfo"), ...payload },
      loginError: { state: false, message: "" },
      signupError: { state: false, message: "" },
    })
  );
};

const logOut = (state) => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("name");
  localStorage.removeItem("picture");
  return state.merge(
    Map({
      loginInfo: { email: "", name: "", picture: null, loggedIn: false },
      loginError: { state: false, message: "" },
      signupError: { state: false, message: "" },
    })
  );
};

const reloadUser = (state) => {
  if (localStorage.getItem("token") !== null) {
    return state.merge(
      Map({
        loginInfo: {
          email: localStorage.getItem("email"),
          name: localStorage.getItem("name"),
          picture: localStorage.getItem("picture"),
          loggedIn: true,
        },
        loginError: { state: false, message: "" },
        signupError: { state: false, message: "" },
      })
    );
  }
  return state;
};

const setErrorLogin = (state, { payload }) => {
  return state.merge(
    Map({ loginError: { state: true, message: payload.message } })
  );
};

const resetLoginError = (state, { payload }) => {
  return state.merge(Map({ loginError: { state: false, message: "" } }));
};

const setSignupError = (state, { payload }) => {
  return state.merge(
    Map({ signupError: { state: true, message: payload.message } })
  );
};

const resetSignupError = (state, { payload }) => {
  return state.merge(Map({ signupError: { state: false, message: "" } }));
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_STATE]: resetState,
  [Types.SAVE_LOGIN_INFO]: saveLoginInfo,
  [Types.MODIFY_LOG_OUT]: logOut,
  [Types.RELOAD_USER]: reloadUser,
  [Types.SET_ERROR_LOGIN]: setErrorLogin,
  [Types.RESET_LOGIN_ERROR]: resetLoginError,
  [Types.SET_SIGNUP_ERROR]: setSignupError,
  [Types.RESET_SIGNUP_ERROR]: resetSignupError,
});
