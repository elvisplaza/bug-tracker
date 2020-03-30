import React, { useState } from "react";
import s from "./Login.module.css";

// API

const Login = props => {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");

  const onHandleValidate = e => {
    console.log("validating");
  };
  const onHandleChange = e => {
    console.log("changing");
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    console.log("submitting");
  };
  return (
    <section className={s.login}>
      <h1>Bug Tracker</h1>
      <div>
        <form onSubmit={onHandleSubmit}>
          <label htmlFor='email'>
            <input
              type='text'
              id='email'
              value={_email}
              onChange={onHandleChange}
              onBlur={onHandleValidate}
              placeholder='Email'
            />
          </label>
          <label htmlFor='password'>
            <input
              type='password'
              id='password'
              value={_email}
              onChange={onHandleChange}
              onBlur={onHandleValidate}
              placeholder='password'
            />
          </label>
          <button type='submit'>Login</button>
        </form>
        <a href='/create-account'>create new account</a>
      </div>
    </section>
  );
};

export default Login;
