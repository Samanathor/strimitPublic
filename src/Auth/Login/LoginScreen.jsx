import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Input, Button } from "Components";
import styles from "../Authstyles";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import FacebookLogin from "react-facebook-login";
const LoginScreen = (props) => {
  const { onSubmitLogin, loginInfo, onFacebookLogin } = props;
  const { register, handleSubmit, errors } = useForm();


  return (
    <div className="w-1/2 mx-auto mt-20 pt-5">
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <h3 className={styles.title}>Iniciar Sesión</h3>

        <Input
          propRef={register({
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          name="email"
          type="email"
          placeholder="Ingresa tu correo electrónico"
          border={errors.email ? "red" : "purple"}
        />
        {errors.email && (
          <p className="text-center text-red-800 text-xs">
            Escribe un correo electrónico valido
          </p>
        )}
        <Input
          border={errors.password ? "red" : "purple"}
          name="password"
          propRef={register({
            required: true,
            maxLength: 10,
          })}
          type="password"
          placeholder="Ingresa tu contraseña"
        />
        {errors.password && (
          <p className="text-center text-red-800 text-xs">
            Debes ingresar una contraseña
          </p>
        )}
        <div className="text-center mt-4 mb-4">
          <Link to="olvide-contrasena" className="text-gray-600">
            Olvide mi contraseña
          </Link>
        </div>
        <Button btnType="submit" text="Iniciar Sesión" color="pink" />
      </form>
      <div className="flex items-center my-6">
        <div className="border flex-auto h-0" />
        <div className="border-2 rounded-full p-1 h-0 mx-6" />
        <div className="border flex-auto h-0" />
      </div>
      <FacebookLogin
        appId="380890929552372"
        fields="name,email,picture"
        callback={onFacebookLogin}
        textButton="Iniciar sesión con Facebook"
        icon={
          <FontAwesomeIcon className="mr-2" size="lg" icon={faFacebookSquare} />
        }
        cssClass="text-center py-4 px-6 rounded-full w-full cursor-pointer bg-blue-700 hover:bg-blue-800 text-white mb-4"
      />

      <Button
        btnType="button"
        text="Iniciar sesión con Google"
        color="google"
        icon={faGoogle}
      />
      <p className="text-gray-600 my-2 text-center">¿No tienes cuenta?</p>
      <div className="text-center">
        <Link to="registrar" className="text-pink-500">
          Regístrate
        </Link>
      </div>
      <p className="text-center text-xs my-4 text-gray-500">
        Al registrarte aceptas nuestros{" "}
        <Link to="/politicas-privacidad">
          Términos y políticas de privacidad.
        </Link>
      </p>
    </div>
  );
};

LoginScreen.defaultProps = {
  loginInfo: {},
  onFacebookLogin: () => {},
  onSubmit: () => {},
};
LoginScreen.propTypes = {
  loginInfo: PropTypes.object,
  onFacebookLogin: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default LoginScreen;
