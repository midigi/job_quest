import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { Drawer, Menu, Dropdown, Modal, Button } from "antd";
import Inventory from "./Inventory"
// import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  // const sessionUser = useSelector((state) => state.session.user);

  return (
    <Menu>
      <Menu.Item>
        <Button>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </Button>
        <Button>
        <NavLink to="/profile" exact={true} activeClassName="active">
            Profile
          </NavLink>
        </Button>
        <Button>
        <NavLink to="/inventory" exact={true} activeClassName="active">
            Inventory
          </NavLink>
        </Button>

        {/* <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}

          <LogoutButton />
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
