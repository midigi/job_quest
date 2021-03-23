import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { Drawer, Menu, Dropdown, Modal, Button } from "antd";
import Inventory from "./Inventory"
import "./styling/navbar.css"
// import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
  // const sessionUser = useSelector((state) => state.session.user);

  return (
    <Menu className="nav_menu">
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
        {/* <Button>
        <NavLink to="/inventory" exact={true} activeClassName="active">
            Inventory
          </NavLink>
        </Button> */}

            <Button onClick={showDrawer}>
            Inventory
            </Button>
          <Drawer
            title="Inventory"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            bodyStyle={{background: "rgb(26, 26, 26)"}}
            width={"30em"}
          >
            <Inventory />
        </Drawer>


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
