import React, { memo } from "react";
import RegisterScreen from "./RegisterScreen";
import { AuthActions } from "../AuthActions";
import { useDispatch, useSelector } from "react-redux";

const {
  registerForm,
  facebookLogin,
  setSignupLogin,
  googleLogin,
} = AuthActions;
const Register = (props) => {
  const dispatch = useDispatch();
  const mapDispatch = {
    onFacebookLogin: (values) => dispatch(facebookLogin(values)),
    onRegisterForm: (values) => dispatch(registerForm(values)),
    onGoogleLogin: (values) => dispatch(googleLogin(values)),
    onGoogleFail: () =>
      dispatch(
        setSignupLogin({
          message:
            "Error con la comunicación con Google, por favor intentalo mas tarde.",
        })
      ),
  };
  const mapStates = {
    ...useSelector((state) => state.auth.toJS()),
  };
  const mapProps = {
    ...props,
    ...mapStates,
    ...mapDispatch,
  };
  return <RegisterScreen {...mapProps} />;
};

export default memo(Register);
