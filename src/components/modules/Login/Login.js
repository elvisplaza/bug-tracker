import React, { Component } from "react";
import history from "../../../helpers/history";
import s from "./Login.module.css";

// API
import * as userAPI from "../../../helpers/apiHelpers/user";

// helpers
import { setToken } from "../../../helpers/tokenService";

// components
import { NotificationBubble, Button } from "./../../ui/";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _email: "",
      _password: "",
      _error: "",
      _isShowNotification: true,
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
      console.log(error);
      this.setState({ _error: error, _isShowNotification: true });
    }
  };
  onHideNotification = () => {
    return this.setState((prevState) => ({
      _isShowNotification: !prevState._isShowNotification,
    }));
  };
  render() {
    const { _password, _email, _error, _isShowNotification } = this.state;
    return (
      <section className={s.login}>
        <h1>Bug Tracker</h1>
        <div className={s.login_container}>
          {_error !== "" && _isShowNotification && (
            <NotificationBubble message={_error} onHideNotification={this.onHideNotification} />
          )}
          <form className={s.login_form} onSubmit={this.onHandleSubmit}>
            <label htmlFor='_email'>
              <input
                className={s.login_input}
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
                className={s.login_input}
                type='password'
                id='_password'
                value={_password}
                onChange={this.onHandleChange}
                onBlur={this.onHandleValidate}
                placeholder='password'
              />
            </label>
            <Button type='submit' green fullWidth>
              Login
            </Button>
          </form>
          <div className={s.link_container}>
            <a className={s.login_link} href='/create-account'>
              Create new account
            </a>
            <a className={s.login_link} href='/create-account'>
              Forgot password
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
