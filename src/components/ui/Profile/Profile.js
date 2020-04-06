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
      _isAdmin: false,
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
    return this.setState({ _user: userInfo });
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
      _phoneNumber,
      _notificationPreference,
    } = this.state;
    return (
      <section className={s.profile}>
        <h2 className={s.profile_title}> Profile</h2>
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
