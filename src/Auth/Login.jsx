import React from "react";
import { Link } from "react-router-dom";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Input, Button } from "Components";
import styles from "./Authstyles";

const Login = (onSubmit) => {
  return (
    <div className="w-4/5 md:w-1/2 mx-auto mt-20 pt-5">
      <form onSubmit={() => onSubmit}>
        <h3 className={styles.title}>Iniciar Sesión</h3>
        <Input type="text" placeholder="Ingresa tu correo electrónico" />
        <Input type="text" placeholder="Ingresa tu contraseña" />
        <div className="text-center mt-4 mb-4">
          <Link to="olvide-contrasena" className="text-gray-600">
            Olvide mi contraseña
          </Link>
        </div>
        <Button text="Iniciar Sesión" color="pink" />
      </form>
      <div className="flex items-center my-6">
        <div class="border flex-auto h-0" />
        <div class="border-2 rounded-full p-1 h-0 mx-6" />
        <div class="border flex-auto h-0" />
      </div>
      <Button
        text="Iniciar sesión con Facebook"
        color="facebook"
        icon={faFacebookSquare}
        className="mb-4"
      />
      <Button text="Iniciar sesión con Google" color="google" icon={faGoogle} />
      <p className="text-gray-600 my-2 text-center">¿No tienes cuenta?</p>
      <div className="text-center">
        <Link to="registrar" className="text-pink-500">
          Regístrate
        </Link>
      </div>
      <p className="text-center text-xs my-4 text-gray-500">
        Al registrarte aceptas nuestros{" "}
        <Link>Términos y políticas de privacidad.</Link>
      </p>
    </div>
  );
};

export default Login;
