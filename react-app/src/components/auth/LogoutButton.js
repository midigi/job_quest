import React from "react";
import { logout } from "../../services/auth";
import {removeUser} from "../../store/session";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    await logout();
    dispatch(removeUser())
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
