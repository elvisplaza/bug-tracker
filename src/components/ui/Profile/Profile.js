import React, { Component } from "react";
import { useParams } from "react-router-dom";
import s from "./Profile.module.css";

// apiHelpers
import * as userAPI from "./../../../helpers/apiHelpers/user";
import * as appAPI from "./../../../helpers/apiHelpers/app";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _email: "",
      _age: "",
      _isAdmin: "",
      _firstName: "",
      _lastName: "",
      _displayName: "",
      _notificationPreference: {},
      _organization: "",
      _user: {},
    };
  }
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.onGetUser(userId);
  }
  onGetUser = async (id) => {
    const { data: userInfo } = await userAPI.onGetUserById({ id });
    console.log(userInfo, "user info");
    return this.setState({
      _email: userInfo.email,
      _age: userInfo.Profile.age,
      _isAdmin: userInfo.is_admin,
      _organization: userInfo.Organization.name,
      _firstName: userInfo.Profile.first_name,
      _lastName: userInfo.Profile.last_name,
      _displayName: userInfo.Profile._displayName,
      _phoneNumber: userInfo.phone_number,
    });
  };
  onHandleChange = (e) => {
    const { value, id } = e.target;
    return this.setState({
      [id]: value,
    });
  };

  onHandleValidation = (e) => {
    return;
  };
  onCreateNewProject = async (e) => {
    const body = {
      _name: "tester",
      _clientLanguage: "js",
      _serverLanguage: "node",
      _databaseType: "sql",
      _lastUpdated: new Date(),
      _description: "something to add",
      _websiteUrl: "https://google.com",
      _organizationId: this.state._user.organization,
    };
    const { data: newProject } = await appAPI.onCreateApp({ body });
    console.log("i created a projecT!!!", newProject);
  };
  render() {
    const {
      _email,
      _age,
      _isAdmin,
      _firstName,
      _lastName,
      _displayName,
      _organization,
      _phoneNumber,
      _notificationPreference,
    } = this.state;
    return (
      <section className={s.profile}>
        <h2 className={s.profile_title}> Profile</h2>
        <form className={s.profile_form}>
          <label htmlFor='_organization' className={s.profile_form_label}>
            <p className={s.profile_form_p}>Organization</p>
            <input
              type='text'
              id='_organization'
              onBlur={this.onHandleValidation}
              onChange={this.onHandleChange}
              value={_organization}
            />
          </label>
          <label htmlFor='_email'>
            <p className={s.profile_form_p}>Email</p>
            <input
              type='email'
              id='_email'
              onBlur={this.onHandleValidation}
              onChange={this.onHandleChange}
              value={_email}
            />
          </label>
          <label htmlFor='_firstName'>
            <p className={s.profile_form_p}>Name</p>
            <input
              type='text'
              id='_firstName'
              onBlur={this.onHandleValidation}
              onChange={this.onHandleChange}
              value={_firstName}
            />
          </label>
          <label htmlFor='_lastName'>
            <p className={s.profile_form_p}>Surname</p>
            <input
              type='text'
              id='_lastName'
              onBlur={this.onHandleValidation}
              onChange={this.onHandleChange}
              value={_lastName}
            />
          </label>
          <label htmlFor='_displayName'>
            <p className={s.profile_form_p}>Display Name</p>
            <input
              type='text'
              id='_displayName'
              onBlur={this.onHandleValidation}
              onChange={this.onHandleChange}
              value={_displayName}
            />
          </label>
          <label htmlFor='_isAdmin'>
            <p className={s.profile_form_p}>Organization Admin</p>
            <input type='checkbox' id='_isAdmin' value={_isAdmin} />
          </label>
          <label htmlFor='_phoneNumber'>
            <p className={s.profile_form_p}>Number</p>
            <input
              type='phone'
              id='_phoneNumber'
              onBlur={this.onHandleValidation}
              onChange={this.onHandleChange}
              value={_phoneNumber}
            />
          </label>
        </form>
      </section>
    );
  }
}

export default Profile;
