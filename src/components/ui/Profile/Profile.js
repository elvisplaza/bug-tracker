import React, { Component } from "react";
import { useParams } from "react-router-dom";
import s from "./Profile.module.css";

// apiHelpers
import * as userAPI from "./../../../helpers/apiHelpers/user";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _email: "",
      _age: "",
      _isAdmin: false,
      _firstName: "",
      _lastName: "",
      _displayName: "",
      _notificationPreference: {},
      _organization: "",
      _user: {}
    };
  }
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.onGetUser(userId);
  }
  onGetUser = async id => {
    const { data: userInfo } = userAPI.onGetUserById({ id });
    return this.setState({ _user: userInfo });
  };
  onHandleChange = e => {
    const { value, id } = e.target;
  };

  onHandleValidation = e => {
    return;
  };
  onCreateNewProject = e => {
    console.log(e);
  };

  render() {
    const {
      _email,
      _age,
      _isAdmin,
      _firstName,
      _lastName,
      _displayName,
      _phoneNumber,
      _notificationPreference
    } = this.state;
    return (
      <section className={s.profile}>
        <h2> I'm a Profile!</h2>
        <form className={s.profile_form}>
          <label htmlFor='_email'>
            <input
              type='email'
              id='_email'
              onBlur={this.onHandleValidation}
              onChange={this.onHandleChange}
              value={_email}
            />
          </label>
          {/*<label htmlFor>
            <input type='email' id='' onBlur={onHandleValidation} onChange={this.onHandleChange} value={} />
          </label> */}
        </form>
        <p onClick={this.onCreateNewProject}>create new project</p>
      </section>
    );
  }
}

export default Profile;
