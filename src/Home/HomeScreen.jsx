import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = (props) => {
  const { loginInfo, onLogOut } = props;

  return (
    <div>
      <h1>Home Screen</h1>
      {loginInfo.loggedIn ? (
        <>
          <p>Si esta loggeado</p>
          <button onClick={onLogOut}>Logout</button>
        </>
      ) : (
        <>
          <p>No esta loggeado</p>
          <Link to="/auth/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
