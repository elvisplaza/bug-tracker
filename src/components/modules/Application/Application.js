import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import s from "./Application.module.css";

// components
import { ToolTip, ReactModal } from "./../../ui/";
import { CreateBug } from "./../../modules/";
// helpers
import * as appAPI from "./../../../helpers/apiHelpers/app";
class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appId: "",
      app: {},
      isShowBugModal: false,
    };
  }
  componentDidMount() {
    const { appId } = this.props.match.params;
    return this.onGetApplication(appId);
  }

  onGetApplication = async (appId) => {
    const { data: application } = await appAPI.onGetAppById({ appId });
    console.log("application!", application);
    return this.setState({
      appId: application.id,
      app: application,
    });
  };
  onShowModal = (e) => {
    return this.setState((prevState) => ({
      isShowBugModal: !prevState.isShowBugModal,
    }));
  };
  render() {
    const { app, isShowBugModal } = this.state;
    const { client_language, database_type, description, name, server_language, website_url } = app;

    return (
      <section className={s.application}>
        <h2 className={s.application_title}>{name}</h2>
        <p>
          <span className={s.bold}>Description:</span>
          {description}
        </p>
        <div className={s.application_app_info_container}>
          <div className={s.info_container_left}>
            <p>
              <span className={s.bold}>Client Language: </span>
              {client_language}
            </p>
            <p>
              <span className={s.bold}>Database:</span> {database_type}
            </p>
          </div>
          <div className={s.info_container_right}>
            <p>
              <span className={s.bold}>Backend Language:</span> {server_language}
            </p>
            <p>
              <span className={s.bold}>website URL:</span>
              {website_url}
            </p>
          </div>
          {/* // =============== bug section ============== */}
        </div>
        <div className={s.application_bug_container}>
          <ReactModal isOpen={isShowBugModal} onClose={this.onShowModal}>
            <CreateBug />
          </ReactModal>
          <ToolTip text='Add Bug' onClick={this.onShowModal} right>
            <FontAwesomeIcon icon={faPlus} className={s.icon} />
          </ToolTip>
        </div>
      </section>
    );
  }
}

export default Application;
