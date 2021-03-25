import React from "react";
import { logout } from "../../services/auth";
import {removeUser} from "../../store/session";
import { useDispatch } from "react-redux";
import { Button } from "antd";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    await logout();
    dispatch(removeUser())
  };

  return(
    <Button
      onClick={onLogout}
      type="text"
    >
       <img className="logout_button" src="https://www.iconpacks.net/icons/2/free-exit-logout-icon-2857-thumb.png" />
    </Button>
  );
};

export default LogoutButton;
