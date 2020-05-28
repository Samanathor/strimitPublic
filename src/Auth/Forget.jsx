import React from "react"
import { Link } from "react-router-dom";
import Button from "../common/components/Button";
import Input from "../common/components/Input";
import styles from "./styles";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";


const Forget = ({onSubmit}) => {
  return <div className={"w-1/2 mx-auto mt-20 pt-5"}>
    <form onSubmit={() => onSubmit}>
        <h3 className={styles.title}>Olvide mi contraseña</h3>
        <Input type="text" placeholder="Ingresa tu correo electrónico" />
        <Button className="my-5" text="Enviar correo de recuperación" color="pink" />
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
        <Link className="text-pink-500">Regístrate</Link>
      </div>
      <p className="text-center text-xs my-4 text-gray-500">
        Al registrarte aceptas nuestros{" "}
        <Link>Términos y políticas de privacidad.</Link>
      </p>

  </div>
}

export default Forget