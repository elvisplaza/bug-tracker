import React, { Component } from "react";
import s from "./CreateNewAccount.module.css";

// API
import * as userAPI from "./../../../helpers/apiHelpers/user";

// helpers
import history from "./../../../helpers/history";
import { numbersToN } from "./../../../helpers/formHelpers";
// components
import { Button } from "./../../ui/";

class CreateNewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _email: "",
      _password: "",
      _comparePassword: "",
      _isMatchingPassword: "",
      _phoneNumber: "",
      _organizationName: "",
      _organizationSize: "",
      _isAdmin: false,
    };
  }

  onHandleValidate = (e) => {
    console.log("validating");
  };
  onHandleChange = (e) => {
    console.log(e.target.value, e.target.id);
    const { value, id } = e.target;
    return this.setState({
      [id]: value,
    });
  };
  onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: newUser } = await userAPI.onCreateUser({ body: this.state });
      console.log(newUser);
      history.push("/");
      return document.location.reload("/");
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const {
      _organizationName,
      _organizationSize,
      _password,
      _comparePassword,
      _isMatchingPassword,
      _email,
      _isAdmin,
      _phoneNumber,
    } = this.state;
    return (
      <section className={s.create_new_account}>
        <h2>New Account</h2>
        <div className={s.form_container}>
          <form onSubmit={this.onHandleSubmit} className={s.create_new_account_form}>
            <label htmlFor='_email'>
              <input
                className={s.create_new_account_input}
                type='email'
                value={_email}
                placeholder='email address'
                id='_email'
                onChange={this.onHandleChange}
                onBlur={this.onHandleValidate}
              />
            </label>
            <label htmlFor='_password'>
              <input
                className={s.create_new_account_input}
                type='password'
                placeholder='password'
                id='_password'
                value={_password}
                onChange={this.onHandleChange}
                onBlur={this.onHandleValidate}
              />
            </label>
            <label htmlFor='_comparePassword'>
              <input
                className={s.create_new_account_input}
                type='password'
                placeholder='re-type your password'
                id='_comparePassword'
                value={_comparePassword}
                onChange={this.onHandleChange}
                onBlur={this.onHandleValidate}
              />
            </label>
            <label htmlFor='_phoneNumber'>
              <input
                className={s.create_new_account_input}
                type='phone'
                value={_phoneNumber}
                placeholder='Enter your phone number'
                id='_phoneNumber'
                onChange={this.onHandleChange}
                onBlur={this.onHandleValidate}
              />
            </label>
            <label htmlFor='_organizationName'>
              <input
                className={s.create_new_account_input}
                type='text'
                placeholder='organization name'
                id='_organizationName'
                value={_organizationName}
                onChange={this.onHandleChange}
                onBlur={this.onHandleValidate}
              />
            </label>
            <label htmlFor='_organizationSize' className={s.create_new_account_label}>
              How many employees for your Company?
              <select
                className={s.create_new_account_select}
                type='text'
                id='_organizationSize'
                value={_organizationSize}
                onChange={this.onHandleChange}>
                {numbersToN(20).map((number) => {
                  return <option value={number}>{number}</option>;
                })}
              </select>
            </label>
            <label htmlFor='_isAdmin' className={s.display_flex}>
              Are you the admin of this organization?
              <input
                className={s.create_new_account_input__small}
                type='checkbox'
                value={_isAdmin}
                onChange={(e) => {
                  this.setState({
                    _isAdmin: !this.state._isAdmin,
                  });
                }}
                id='_isAdmin'
              />
            </label>
            <Button green fullWidth type='submit'>
              Create Account
            </Button>
          </form>
          <a href='/' className={s.create_new_account_link}>
            Login
          </a>
        </div>
      </section>
    );
  }
}

export default CreateNewAccount;
