import React from "react";
import Logo from "../common/assets/logo_strimit.png";
import Login from "./Login/LoginContainer";
import Register from "./Register/RegisterContainer";
import Forget from "./Forget/ForgetContainer";
import { Switch, Route } from "react-router-dom";

const Auth = () => {
  return (
    <div className="md:flex md:flex-row">
      <div className="hidden md:block md:w-1/2 bg-purple-900 min-h-screen pt-20">
        <img src={Logo} alt="logo-strimit" className="mx-auto" />
        <p className="w-1/2 text-center mx-auto mt-10 text-white">
          lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500,
        </p>
      </div>
      <div className="md:w-1/2">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registrar">
            <Register />
          </Route>
          <Route path="/olvide-contrasena">
            <Forget />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
