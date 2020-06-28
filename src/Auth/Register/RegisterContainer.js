import React from "react";
import RegisterScreen from "./RegisterScreen";
import { AuthActions } from "../AuthActions";
import { toJS } from "../../common/hocs/to-js";
import { connect } from "react-redux";

const Register = (props) => {
  return <RegisterScreen {...props} />;
};

const {
  registerForm,
  facebookLogin,
  setSignupLogin,
  googleLogin,
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
  onRegisterForm: registerForm,
  onGoogleLogin: googleLogin,
  onGoogleFail: () =>
    setSignupLogin({
      message:
        "Error con la comunicación con Google, por favor intentalo mas tarde.",
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Register));
