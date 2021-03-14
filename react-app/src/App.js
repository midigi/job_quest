import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Home from "./components/Home";
import Events from "./components/Event";
import Options from "./components/Option";
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
  // useEffect(() => {
  //   (async() => {
  //     const user = await authenticate();
  //     if (!user.errors) {
  //       dispatch(setUser(user)).then(setLoaded(true));
  //     }
  //     else{
  //       setLoaded(true);
  //     }
  //   })();
  // }, []);

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
        <ProtectedRoute path="/:id/events" exact={true} >
          <NavBar />
          <Events />
        </ProtectedRoute>
        <ProtectedRoute path="/:id/options" exact={true} >
          <NavBar />
          <Options />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
