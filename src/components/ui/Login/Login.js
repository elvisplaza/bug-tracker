import React, { Component } from "react";
import history from "./../../../helpers/history";
import s from "./Login.module.css";

// API
import * as userAPI from "./../../../helpers/apiHelpers/user";

// helpers
import { stringify } from "./../../../helpers/stringify";
import { setToken } from "../../../helpers/tokenService";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _email: "",
      _password: ""
    };
  }

  onHandleValidate = e => {
    console.log("validating");
  };
  onHandleChange = e => {
    const { id, value } = e.target;
    return this.setState({
      [id]: value
    });
  };
  onHandleSubmit = async e => {
    e.preventDefault();
    const { _email, _password } = this.state;
    console.log(stringify({ email: "haha", password: "haha" }));
    try {
      const {
        data: [token, user]
      } = await userAPI.onGetUser({ email: _email, password: _password });
      setToken(token);
      console.log("user info", user);
      history.push(`/home/${user.id}`);
      document.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { _password, _email } = this.state;
    return (
      <section className={s.login}>
        <h1>Bug Tracker</h1>
        <div>
          <form onSubmit={this.onHandleSubmit}>
            <label htmlFor='_email'>
              <input
                type='text'
                id='_email'
                value={_email}
                onChange={this.onHandleChange}
                onBlur={this.onHandleValidate}
                placeholder='Email'
              />
            </label>
            <label htmlFor='_password'>
              <input
                type='password'
                id='_password'
                value={_password}
                onChange={this.onHandleChange}
                onBlur={this.onHandleValidate}
                placeholder='password'
              />
            </label>
            <button type='submit'>Login</button>
          </form>
          <a href='/create-account'>create new account</a>
        </div>
      </section>
    );
  }
}

export default Login;
