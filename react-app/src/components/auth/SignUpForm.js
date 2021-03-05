import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import { signUp } from '../../services/auth';
import { createUser, setUser } from "../../store/session";
import { login } from "../../services/auth";
import { Button } from "antd";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();
    let newErrors = []
    if (password === repeatPassword) {
      dispatch(createUser({ username, firstName, lastName, email, password }))
      .then(() => {
        setUsername("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      })
      .catch((res) => {
        console.log(res)
        // const data = await res.json();
        // if (data && data.errors) {
        //   newErrors = data.errors;
        // }
      });
  }
};

  const demoLogin = async (e) => {
    e.preventDefault();
    const user =await login("demo@aa.io", "password" );
    dispatch(setUser(user));
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className='background'>
      <div>
        <p>Already have an account?
          <a href="/login">Log in</a>
        </p>
        <form onSubmit={onSignUp}>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
                <input
                  className="form_input"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={updateFirstName}
                  value={firstName}
                ></input>
          </div>
          <div>
                <input
                  className="form_input"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={updateLastName}
                  value={lastName}
                ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button type="submit">Sign Up</button>
          <Button
            className="submit_button"
            onClick={demoLogin}
            shape="round"
            htmlType="submit"
            size="large"
            type="primary"
          >
            Demo User
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
