import { createReducer } from "reduxsauce";
import { Map } from "immutable";

import { AuthTypes as Types } from "./AuthActions";

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
  loginInfo: {
    email: "",
    name: "",
    loggedIn: false,
  },
});

const resetState = () => INITIAL_STATE;

const saveLoginInfo = (state, { payload }) =>
  state.merge(Map({ loginInfo: { ...state.get("loginInfo"), ...payload } }));
const logOut = (state) =>
  state.merge(
    Map({ loginInfo: { email: null, provider: "none", loggedIn: false } })
  );

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_STATE]: resetState,
  [Types.SAVE_LOGIN_INFO]: saveLoginInfo,
  [Types.MODIFY_LOG_OUT]: logOut,
});
