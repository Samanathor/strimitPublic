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
    onSubmitLogin: (data) => {
      console.log("Login Data")
      console.log(data)
      // dispatch(login({...data}))


      const facebookMockData = {
        "email": "haavendanov@unal.edu.co",
        "data_access_expiration_time": 1599167994,
        "accessToken": "EAAFaaxSN2ZCQBAOp7qlC9wC7ZC3gZB9vFSKa3Px40er88hSnnBWrtCSmZCXHl1ATwfRwUK3WjuHyNphfSaIwZAeKPBXdGkvQ9JoU7W0EpRDPm4xZC8U5gTJYlNJ9r46eaLGnBTmbEHRU46YWO1ZBDEGvVQVFuEZBkQJU0laPqrEZBdrZBiUB2iRM2PYBEUeuGzmOZC5PZBoaW5VozwZDZD",
        "name": "Helmer Avendaño",
        "picture": {
          "data": {
            "url": "test"
          }
        },
        "userID": "123123123"
      }

      dispatch(facebookLogin(facebookMockData))

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
