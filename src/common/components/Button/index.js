import React from "react";
import { styles } from "./styles";

const Button = ({ color }) => {
  return <button className={styles.button + " " + color}>Boton</button>;
};

export default Button;
