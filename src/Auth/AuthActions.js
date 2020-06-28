import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    googleLogin: ["payload"],
    facebookLogin: ["payload"],
    loginForm: ["payload"],
    resetState: [""],
    saveLoginInfo: ["payload"],
    logOut: [""],
    modifyLogOut: [""],
    forgetPassword: ["payload"],
    reloadUser: [""],
    setErrorLogin: ["payload"],
    resetLoginError: [""],
    registerForm: ["payload"],
    setSignupError: ["payload"],
    resetSignupError: ["payload"],
  },
  { prefix: "App/Auth/" }
);

export const AuthTypes = Types;
export const AuthActions = Creators;
