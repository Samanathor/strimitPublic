import React, { memo } from "react";
import HomeScreen from "./HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../Auth/AuthActions";

const { logOut } = AuthActions;

const HomeContainer = () => {
  const dispatch = useDispatch();

  const mapStates = {
    ...useSelector((state) => state.auth.toJS()),
  };

  const mapDispatch = {
    onLogOut: () => dispatch(logOut()),
  };

  const mapProps = {
    ...mapStates,
    ...mapDispatch,
  };

  return <HomeScreen {...mapProps} />;
};

export default memo(HomeContainer);
