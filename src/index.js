import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.generated.css";
import App from "./App/App";
import Login from "./Auth/Login/Login";

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);
