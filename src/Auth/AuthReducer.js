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
});

const resetState = () => INITIAL_STATE;

const saveLoginInfo = (state, { payload }) => {
  localStorage.setItem("token", payload.token);
  localStorage.setItem("email", payload.email);
  localStorage.setItem("name", payload.name);
  localStorage.setItem("picture", payload.picture);
  return state.merge(
    Map({ loginInfo: { ...state.get("loginInfo"), ...payload } })
  );
};

const logOut = (state) => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("name");
  localStorage.removeItem("picture");
  return state.merge(
    Map({ loginInfo: { email: "", name: "", picture: null, loggedIn: false } })
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
      })
    );
  }
  return state;
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_STATE]: resetState,
  [Types.SAVE_LOGIN_INFO]: saveLoginInfo,
  [Types.MODIFY_LOG_OUT]: logOut,
  [Types.RELOAD_USER]: reloadUser,
});
