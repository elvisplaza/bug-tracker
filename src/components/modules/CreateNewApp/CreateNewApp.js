import React, { Component } from "react";
import cx from "classnames";
import s from "./CreateNewApp.module.css";

// components
import { Button } from "./../../ui/";

// helpers
import * as appAPI from "./../../../helpers/apiHelpers/app";
import history from "./../../../helpers/history";

class CreateNewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _name: "",
      _clientLanguage: "",
      _serverLanguage: "",
      _databaseType: "",
      _lastUpdated: new Date(),
      _description: "",
      _websiteUrl: "",
      _orgId: this.props.orgId,
      _userId: this.props.userId,
    };
  }
  onHandleChange = (e) => {
    const { value, id } = e.target;
    return this.setState({
      [id]: value,
    });
  };

  onCreateApp = async (e) => {
    e.preventDefault();
    try {
      const { data: newApp } = await appAPI.onCreateApp({ body: this.state });
      console.log(newApp, "this should be th new app", newApp);
      history.push(`/app/${newApp.id}`);
      document.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { _name, _description, _clientLanguage, _serverLanguage, _databaseType, _websiteUrl } = this.state;
    return (
      <section className={s.create_new_app}>
        <h2 className={s.create_new_app_title}>New App</h2>
        <form className={s.create_new_app_form} onSubmit={this.onCreateApp}>
          <label htmlFor='_name'>
            <input
              type='text'
              id='_name'
              className={s.create_new_app_form_input}
              placeholder='Application Name'
              value={_name}
              onChange={this.onHandleChange}
            />
          </label>
          <label htmlFor='_description'>
            <textarea
              id='_description'
              placeholder='Give a brief description of your application!'
              value={_description}
              onChange={this.onHandleChange}
            />
          </label>
          <label htmlFor='_clientLanguage'>
            <input
              type='text'
              id='_clientLanguage'
              placeholder='Front End Language'
              value={_clientLanguage}
              className={s.create_new_app_form_input}
              onChange={this.onHandleChange}
            />
          </label>
          <label htmlFor='_serverLanguage'>
            <input
              type='text'
              id='_serverLanguage'
              placeholder='Back End Language'
              value={_serverLanguage}
              className={s.create_new_app_form_input}
              onChange={this.onHandleChange}
            />
          </label>
          <label htmlFor='_databaseType'>
            <input
              type='text'
              id='_databaseType'
              placeholder='Database used'
              value={_databaseType}
              className={s.create_new_app_form_input}
              onChange={this.onHandleChange}
            />
          </label>
          <label htmlFor='_websiteUrl'>
            <input
              type='text'
              id='_websiteUrl'
              placeholder='Website URL'
              value={_websiteUrl}
              className={s.create_new_app_form_input}
              onChange={this.onHandleChange}
            />
          </label>
          <div className={s.button_container}>
            <Button type='submit' green>
              Create App
            </Button>
          </div>
        </form>
      </section>
    );
  }
}

export default CreateNewApp;
