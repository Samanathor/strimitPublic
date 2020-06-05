import React from "react"
import Input from "../common/components/Input"
import Button from "../common/components/Button"
import {Link} from "react-router-dom"
import styles from "./styles"
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Register = ({onSubmit})=> {
  return <div className="mt-20 w-4/5 md:w-1/2 mx-auto md:mt-12 pt-0">
    <form onSubmit={() => onSubmit}>
    <h3 className={styles.title}>Regístrate</h3>
        <Input type="text" placeholder="Ingresa tu nombre y apellido" />
        <Input type="email" placeholder="Ingresa tu correo electrónico" />
        <Input type="password" placeholder="Ingresa tu contraseña" />
        <Input type="password" placeholder="Confirma tu contraseña" />
       
        <Button className="mt-5" text="Registrarme" color="pink" />
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
      <p className="text-gray-600 my-2 text-center">¿Ya tienes cuenta?</p>
      <div className="text-center">
        <Link to="/login" className="text-pink-500">Inicia sesión</Link>
      </div>
      <p className="text-center text-xs my-4 text-gray-500">
        Al registrarte aceptas nuestros{" "}
        <Link>Términos y políticas de privacidad.</Link>
      </p>
  </div>
}

export default Register