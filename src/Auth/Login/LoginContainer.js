import React from "react";
import { AuthActions } from "../AuthActions";
import LoginScreen from "./LoginScreen";
import { connect } from "react-redux";
import { toJS } from "../../common/hocs/to-js";

const Login = (props) => {
  return <LoginScreen {...props} />;
};

const {
  googleLogin,
  facebookLogin,
  loginForm,
  logOut,
  setErrorLogin,
  resetLoginError,
} = AuthActions;

const mapStateToProps = (state) => {
  return {
    loginInfo: state.auth.get("loginInfo"),
    loginError: state.auth.get("loginError"),
    signupError: state.auth.get("signupError"),
  };
};

const mapDispatchToProps = {
  onFacebookLogin: facebookLogin,
  onLoginForm: loginForm,
  onGoogleLogin: googleLogin,
  onGoogleFail: () =>
    setErrorLogin({
      message:
        "Error con la comunicación con Google, por favor intentalo mas tarde.",
    }),
  onSubmitLogin: (data) => loginForm({ data }),
  onLogOut: logOut,
  resetLoginError,
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Login));
