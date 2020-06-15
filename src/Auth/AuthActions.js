import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    facebookLogin: ["payload"],
    loginForm: ["payload"],
    resetState: [""],
    saveLoginInfo: ["payload"],
    logOut: [""],
    modifyLogOut: [""],
    forgetPassword: ["payload"],
    reloadUser: [""],
  },
  { prefix: "App/Auth/" }
);

export const AuthTypes = Types;
export const AuthActions = Creators;
