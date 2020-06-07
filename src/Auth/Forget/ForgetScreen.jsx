import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "Components";
import styles from "../Authstyles";
import FacebookLogin from "react-facebook-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";


const Forget = (props) => {

  const {onForgetSubmit} = props
  const { register, handleSubmit,setValue, errors } = useForm();
  const sendForm = values => onForgetSubmit(values)
  
  return (
    <div className={"w-4/5 md:w-1/2 mx-auto mt-20 pt-5"}>
      <form onSubmit={ handleSubmit(sendForm)}>
        <h3 className={styles.title}>Olvide mi contraseña</h3>
        <Input
          defaultValue=""
          onChange={e =>setValue("email",e.target.value, true)}
          propRef={register({
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          border={errors.email ? "red" : "purple"}
          type="email"
          placeholder="Ingresa tu correo electrónico"
          name="email"          
        />
        {errors.email && (
          <p className="text-center text-red-800 text-xs">
            Escribe un correo electrónico valido
          </p>
        )}
        <Button
          type="submit"
          className="my-5"
          text="Enviar correo de recuperación"
          color="pink"
        />
      </form>
      <div className="flex items-center my-6">
        <div className="border flex-auto h-0" />
        <div className="border-2 rounded-full p-1 h-0 mx-6" />
        <div className="border flex-auto h-0" />
      </div>
      <FacebookLogin
        appId="380890929552372"
        fields="name,email,picture"
        
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

export default Forget;
