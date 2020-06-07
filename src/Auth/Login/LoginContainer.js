import React, { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../AuthActions";
import LoginScreen from "./LoginScreen";

// Aqui coloco las acciones de AuthActions
const { facebookLogin, resetState, login, logOut } = AuthActions;

// Este es el componente como tal condensado con lo que se necesita
const Login = (props) => {
  //   Esto es mapDispatchToProps usa el hook
  const dispatch = useDispatch();
  // Aqui se mapea todos los states de la login screen Hook useSelector
  const mapStates = {
    ...useSelector((state) => state.auth.toJS()),
  };
  //   ToJS es inmutable asi hace que no se dañe

  const mapDispatch = {
    onFacebookLogin: () => dispatch(facebookLogin()),
    onResetState: () => dispatch(resetState()),
    onSubmit: () => {
      console.log("something");
    },
    onLogOut: () => dispatch(logOut()),
  };

  const mapProps = {
    ...props,
    ...mapStates,
    ...mapDispatch,
  };

  return <LoginScreen {...mapProps} />;
};

// Es para setear el tipo de props que se esperan
Login.propTypes = {
  match: PropTypes.object,
};

// Estos son los default de las props
Login.defaultProps = {
  match: {},
};

// memo es un helper de react que sirve para evitar rerenders inutiles
export default memo(Login);
