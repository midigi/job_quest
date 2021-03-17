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
      <div className='center_form'>
        <div className='title'>JOB QUEST
        <div className='sub_title'>Sign Up Form
        <form onSubmit={onSignUp} className="form">
          <div>
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={updateFirstName}
                  value={firstName}
                ></input>
          </div>
          <div>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={updateLastName}
                  value={lastName}
                ></input>
          </div>
          <div >
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div >
            <input
              className="input"
              type="password"
              name="repeat_password"
              placeholder="Confirm Password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button type="submit" className="button">Sign Up</button>
          <button
            className="button"
            onClick={demoLogin}
            shape="round"
            htmlType="submit"
            size="large"
            type="primary"
          >
            Demo User
          </button>
        </form>
        <p className="account">Already have an account?
          <a href="/login"> Log in</a>
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
