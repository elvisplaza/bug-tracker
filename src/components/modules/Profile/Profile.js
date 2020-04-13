import React, { Component } from "react";
import s from "./Profile.module.css";

// component
import { Button, ToolTip } from "./../../ui";

// apiHelpers
import * as userAPI from "./../../../helpers/apiHelpers/user";
import * as appAPI from "./../../../helpers/apiHelpers/app";
import * as profileAPI from "./../../../helpers/apiHelpers/profile";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _email: "",
      _age: "",
      _isAdmin: true,
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
      _user: userInfo,
      _email: userInfo.email,
      _age: userInfo.user_profile.age,
      _isAdmin: userInfo.is_admin,
      _organization: userInfo.user_company.name,
      _firstName: userInfo.user_profile.first_name,
      _lastName: userInfo.user_profile.last_name,
      _displayName: userInfo.user_profile.display_name,
      _phoneNumber: userInfo.phone_number,
    });
  };
  onHandleChange = (e) => {
    const { value, id } = e.target;
    return this.setState({
      [id]: value,
    });
  };

  onHandleValidation = (e) => {};

  onCancelChanges = (e) => {
    const { id: userId } = this.state._user;
    return this.onGetUser(userId);
  };

  onSaveChanges = async (e) => {
    e.preventDefault();
    const { id: profileId } = this.state._user.user_profile;
    try {
      const { data: profileUpdate } = profileAPI.onUpdateProfileById({ body: this.state, profileId });

      console.log(profileUpdate, "profile is updated!");
    } catch (err) {
      console.log(err);
    }
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
      <section className={s.profile} onSubmit={this.onSaveChanges}>
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
              value={_displayName}
              onBlur={this.onHandleValidation}
              onChange={this.onHandleChange}
            />
          </label>
          {/*<label htmlFor='_isAdmin'>
            <p className={s.profile_form_p}>Organization Admin</p>
            <input type='checkbox' id='_isAdmin' value='0' />
    </label> */}
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
          <Button type='submit' green>
            Save
          </Button>
          <Button type='button' onClick={this.onCancelChanges}>
            Cancel
          </Button>
        </form>
      </section>
    );
  }
}

export default Profile;
