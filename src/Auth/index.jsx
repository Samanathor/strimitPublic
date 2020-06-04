import React from "react";
import Logo from "../common/assets/logo_strimit.png";
import Login from "./LoginContainer";
import Register from "./Register";
import Forget from "./Forget";

const Auth = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 bg-purple-900 min-h-screen">
        <img src={Logo} alt="logo-strimit" className="mx-auto mt-20" />
        <p className="w-1/2 text-center mx-auto mt-10 text-white">
          lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500,
        </p>
      </div>
      <div className="w-1/2">
        <Login />
      </div>
    </div>
  );
};

export default Auth;
