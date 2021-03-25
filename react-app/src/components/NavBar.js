import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { Drawer, Menu, Button } from "antd";
import Inventory from "./Inventory";
import Profile from "./profile";
import "./styling/navbar.css";
// import {inventory_icon} from "../../images/inventory_bag_icon.png";
// import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [visibleProfile, setVisibleProfile] = useState(false);

  const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };

    const showProfile = () => {
      setVisibleProfile(true);
    };
    const onCloseProfile = () => {
      setVisibleProfile(false);
    };
  // const sessionUser = useSelector((state) => state.session.user);

  return (
    <Menu className="nav_menu">
      <Menu.Item>
        <Button
        type="text"
        >
          <NavLink to="/" exact={true} activeClassName="active">
          <img className="home_button" src="https://pics.freeicons.io/uploads/icons/png/5205410931579605509-512.png" />
          </NavLink>
        </Button>

        <Button
          type="text"
        >
        <NavLink to="/character" exact={true} activeClassName="active">
          <img className="create_character_button" src="https://lh3.googleusercontent.com/proxy/rxPs4Q9AFstOEkKH9qn4j7OlqFbPlUMsHHiSgfDNRTDgOWH4BayuGnxheHi2aGsyNs_lk7NTqFUioVC3ix6guOO7WAedxELiyOvRwv0QTVtqBo1NYkM" />
          </NavLink>
        </Button>

        <Button
          onClick={showProfile}
          type="text"
        >
          <img className="profile_button" src="http://cdn.onlinewebfonts.com/svg/img_206976.png" />
        </Button>
          <Drawer
            title="Profile"
            placement="left"
            closable={false}
            onClose={onCloseProfile}
            visible={visibleProfile}
            bodyStyle={{background: "rgb(26, 26, 26)"}}
            width={"30em"}
          >
            <Profile />
        </Drawer>

        {/* <Button>
        <NavLink to="/inventory" exact={true} activeClassName="active">
            Inventory
          </NavLink>
        </Button> */}

            <Button
              // className="inventory_button"
              // style={{"background-image: url(https://icon-library.com/images/inventory-bag-2-512.png)"}}
              onClick={showDrawer}
              type="text"
            >
              <img className="inventory_button" src="https://icon-library.com/images/inventory-bag-2-512.png" />
              {/* <span className="inventory_button"></span> */}
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
