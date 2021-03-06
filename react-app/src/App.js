import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Character from "./components/Character";
import Profile from "./components/profile";
import Events from "./components/Event";
import Options from "./components/Option";
import EasterEgg from "./components/EasterEgg";
import NotFound from "./components/NotFound";
import {useDispatch} from 'react-redux';
import { restoreUser } from "./store/session";
import "antd/dist/antd.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser()).then(() => {
      setLoaded(true);
    });
  }, [dispatch]);
  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true} >
          <NavBar />
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <NavBar />
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} >
          <NavBar />
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/inventory" exact={true} >
          <NavBar />
          <Inventory />
        </ProtectedRoute>
        <ProtectedRoute path="/profile" exact={true} >
          <NavBar />
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/character" exact={true} >
          <NavBar />
          <Character />
        </ProtectedRoute>
        <ProtectedRoute path="/:id/events" exact={true} >
          <NavBar />
          <Events />
        </ProtectedRoute>
        <ProtectedRoute path="/:id/options" exact={true} >
          <NavBar />
          <Options />
        </ProtectedRoute>
        <ProtectedRoute path="/:charId/hire-me" exact={true} >
          <EasterEgg />
        </ProtectedRoute>
        <ProtectedRoute path="/*">
            <NotFound />
          </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
