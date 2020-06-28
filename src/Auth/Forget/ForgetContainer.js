import React from "react";
import ForgetScreen from "./ForgetScreen";
import { AuthActions } from "../AuthActions";
import { connect } from "react-redux";

const Forget = (props) => {
  return <ForgetScreen {...props} />;
};

const { forgetPassword } = AuthActions;

const mapDispatchToProps = {
  onFacebookLogin: () => console.log("onFacebookLogin"),
  onGoogleLogin: () => console.log("onGoogleLogin"),
  onGoogleFail: () => console.log("onGoogleFail"),
  onForgetSubmit: forgetPassword,
};

export default connect(null, mapDispatchToProps)(Forget);
