import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../styling/form.css";
import { login } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import {setUser} from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);


  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      dispatch(setUser(user))
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className='background'>
      <div className='mid_box'>
        <p>First time?
          <a href="/sign-up">Make an account</a>
        </p>
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
