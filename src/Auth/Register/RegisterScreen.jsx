import React from "react";
import { Input, Button } from "Components";
import { Link } from "react-router-dom";
import styles from "../Authstyles";
import { useForm } from "react-hook-form";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = (props) => {
  const {
    onRegisterForm,
    resetSignupError,
    signupError,
    onGoogleFail,
    onGoogleLogin,
    onFacebookLogin,
  } = props;
  const { register, handleSubmit, errors, watch } = useForm();
  return (
    <div className="mt-20 w-4/5 md:w-1/2 mx-auto md:mt-12 pt-0">
      <form onSubmit={handleSubmit(onRegisterForm)}>
        <h3 className={styles.title}>Regístrate</h3>
        {signupError.state && (
          <p className="text-red-800 text-center">{signupError.message}</p>
        )}
        <Input
          name="name"
          border={errors.password ? "red" : "purple"}
          propRef={register({
            required: true,
          })}
          type="text"
          placeholder="Ingresa tu nombre y apellido"
        />
        {errors.name && (
          <p className="text-center text-red-800 text-xs">
            Escribe un nombre y apellido valido.
          </p>
        )}
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
          })}
          onFocus={resetSignupError}
          type="password"
          placeholder="Ingresa tu contraseña"
        />
        {errors.password && (
          <p className="text-center text-red-800 text-xs">
            Escribe una contraseña valida
          </p>
        )}
        <Input
          border={errors.password ? "red" : "purple"}
          name="passwordconfirm"
          propRef={register({
            required: true,
            validate: (value) => {
              return value === watch("password");
            },
          })}
          onFocus={resetSignupError}
          type="password"
          placeholder="Confirma tu contraseña"
        />
        {errors.passwordconfirm && (
          <p className="text-center text-red-800 text-xs">
            Las contraseñas no coinciden
          </p>
        )}
        <Button
          btnType="submit"
          className="mt-5"
          text="Registrarme"
          color="pink"
        />
      </form>
      <div className="flex items-center my-6">
        <div class="border flex-auto h-0" />
        <div class="border-2 rounded-full p-1 h-0 mx-6" />
        <div class="border flex-auto h-0" />
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

      <GoogleLogin
        clientId="512367997945-djogbjcdq7q92orcj333ps9185hfvcq5.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={onGoogleLogin}
        onFailure={onGoogleFail}
        disabledStyle={true}
        render={(renderProps) => (
          <Button
            btnType="button"
            text="Iniciar sesión con Google"
            color="google"
            icon={faGoogle}
            onClick={renderProps.onClick}
          />
        )}
      />
      <p className="text-gray-600 my-2 text-center">¿Ya tienes cuenta?</p>
      <div className="text-center">
        <Link to="login" className="text-pink-500">
          Inicia sesión
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

export default Register;
