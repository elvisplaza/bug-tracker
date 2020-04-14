import React, { Component } from "react";
import history from "../../../helpers/history";
import s from "./Login.module.css";

// API
import * as userAPI from "../../../helpers/apiHelpers/user";

// helpers
import { stringify } from "../../../helpers/stringify";
import { setToken } from "../../../helpers/tokenService";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _email: "",
      _password: "",
      _error: "",
    };
  }

  onHandleValidate = (e) => {
    console.log("validating");
  };
  onHandleChange = (e) => {
    const { id, value } = e.target;
    return this.setState({
      [id]: value,
    });
  };
  onHandleSubmit = async (e) => {
    e.preventDefault();
    const { _email, _password } = this.state;
    const body = {
      email: _email,
      password: _password,
    };

    try {
      const {
        data: [token, user],
      } = await userAPI.onLogin({ body });
      // setToken(token);
      console.log("user info", user);
      // history.push(`/home/${user.id}`);
      // document.location.reload();
    } catch (err) {
      const { error } = err.response.data;

      this.setState({ _error: error });
      // error.response.data.message,
    }
  };
  render() {
    const { _password, _email, _error } = this.state;
    return (
      <section className={s.login}>
        <h1>Bug Tracker</h1>
        <div>
          {_error}
          <form className={s.login_form} onSubmit={this.onHandleSubmit}>
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
