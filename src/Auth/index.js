import React from "react";
import { Link } from "react-router-dom";
import Logo from "../common/assets/logo_strimit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
  return (
    <div id="Auth" className="flex flex-row">
      <div className="w-1/2 bg-purple-900 h-screen">
        <img src={Logo} alt="logo-strimit" className="mx-auto mt-20" />
        <p className="w-1/2 text-center mx-auto mt-10 text-white">
          lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500,
        </p>
        <button className="boton2-custom">Sebastian</button>
      </div>
      <div className="w-1/2">
        <div className="w-1/2 mx-auto mt-20 pt-5">
          <form>
            <h3 className="text-purple-900 font-bold text-xl mb-6 text-center">
              Iniciar Sesión
            </h3>
            <input
              type="text"
              className="bg-white focus:outline-none border border-purple-900 rounded-full mt-2 mb-2 py-3 px-6 block w-full appearance-none leading-normal"
              placeholder="Ingresa tu correo electrónico"
            />
            <input
              type="text"
              className="bg-white focus:outline-none border border-purple-900 rounded-full mt-2 mb-2 py-3 px-6 block w-full appearance-none leading-normal"
              placeholder="Ingresa tu contraseña"
            />
            <div className="text-center mt-4 mb-4">
              <Link className="text-gray-600">Olvide mi contraseña</Link>
            </div>
            <button className=" bg-pink-500 rounded-full py-4 px-6 w-full text-white hover:bg-purple-900 ">
              Iniciar Sesión
            </button>
          </form>
          <div className="flex">
            <div className="w-3/4 mb-2 border-b-2"></div>{" "}
            <div className="w-1/3 mt-2 text-center text-gray-500"> o </div>
            <div className="w-3/4 mb-2 border-b-2"></div>
          </div>
          <button className="bg-blue-700 mt-4 rounded-full py-4 px-6 w-full text-white hover:bg-blue-400">
            <FontAwesomeIcon
              className="mr-2"
              size="lg"
              icon={faFacebookSquare}
            />
            Iniciar sesión con Facebook
          </button>
          <button className="bg-red-600 mt-4 rounded-full py-4 px-6 w-full text-white hover:bg-red-400">
            <FontAwesomeIcon className="mr-2" size="lg" icon={faGoogle} />
            Iniciar sesión con Google
          </button>
          <p className="text-gray-600 my-2 text-center">¿No tienes cuenta?</p>
          <div className="text-center">
            <Link className="text-pink-500">Regístrate</Link>
          </div>
          <p className="text-center text-xs my-4 text-gray-500">
            Al registrarte aceptas nuestros{" "}
            <Link>Términos y políticas de privacidad.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
