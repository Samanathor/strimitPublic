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
  return state.merge(
    Map({ loginInfo: { ...state.get("loginInfo"), ...payload } })
  );
};

const logOut = (state) => {
  state.merge(
    Map({ loginInfo: { email: "", name: "", picture: null, loggedIn: false } })
  );
  localStorage.removeItem("token");
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_STATE]: resetState,
  [Types.SAVE_LOGIN_INFO]: saveLoginInfo,
  [Types.MODIFY_LOG_OUT]: logOut,
});
