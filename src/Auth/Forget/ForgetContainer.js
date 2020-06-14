import React, { memo } from "react";
import ForgetScreen from "./ForgetScreen";
import { AuthActions } from "../AuthActions";
import { useDispatch } from "react-redux";

const { forgetPassword } = AuthActions;
const Forget = () => {
  const dispatch = useDispatch();

  const mapDispatch = {
    onFacebookLogin: () => console.log(),
    onGoogleLogin: () => console.log(),
    onGoogleFail: () => console.log(),
    onForgetSubmit: (payload) => dispatch(forgetPassword(payload)),
  };

  const mapProps = {
    ...mapDispatch,
  };

  return <ForgetScreen {...mapProps} />;
};

export default memo(Forget);
