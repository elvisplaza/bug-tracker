import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import cx from "classnames";
import s from "./Application.module.css";

// components
import { ToolTip, ReactModal, BugCard } from "./../../ui/";
import { CreateBug } from "./../../modules/";
// helpers
import * as appAPI from "./../../../helpers/apiHelpers/app";

// context
import UserInfoContext from "./../../../context/UserInfoContext";
class Application extends Component {
  static contextType = UserInfoContext;

  constructor(props) {
    super(props);
    this.state = {
      appId: "",
      app: {},
      _appBugs: [],
      _appUsers: [],
      _isShowBugModal: false,
    };
  }
  componentDidMount() {
    console.log(this.context, "this is context!");
    const { appId } = this.props.match.params;
    console.log(appId);
    return this.onGetApplication(appId);
  }

  onGetApplication = async (appId) => {
    const { data: application } = await appAPI.onGetAppById({ appId });
    console.log("application!", application);
    return this.setState({
      appId: application.id,
      app: application,
      _appBugs: application.app_bugs,
      _appUsers: application.app_users,
    });
  };
  onShowModal = (e) => {
    return this.setState((prevState) => ({
      _isShowBugModal: !prevState._isShowBugModal,
    }));
  };
  render() {
    const { app, _isShowBugModal, appId, _appBugs, _appUsers = [] } = this.state;
    const { client_language, database_type, description, name, server_language, website_url } = app;
    const { userId = "" } = this.context;

    return (
      <section className={s.application}>
        <a href={`/home/${userId}`}>
          <FontAwesomeIcon icon={faArrowLeft} className={s.icon} />
        </a>
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
            <p>
              <span className={s.bold}>App Users:</span>{" "}
              {_appUsers.map((user) => {
                return user.user_profile.display_name;
              })}
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
          <div className={s.display_row}>
            <ReactModal isOpen={_isShowBugModal} onClose={this.onShowModal}>
              <CreateBug applicationId={appId} />
            </ReactModal>
            <ToolTip text='Add Bug' onClick={this.onShowModal} right>
              <FontAwesomeIcon icon={faPlus} className={s.icon} />
            </ToolTip>
            <h3 className={s.container_title}>Create Bug</h3>
          </div>
          <div className={s.bug_container}>
            {_appBugs.length > 0 &&
              _appBugs.map((bug) => {
                return (
                  <BugCard
                    key={bug.id}
                    title={bug.title}
                    riskLevel={bug.risk_level}
                    expectedResult={bug.expected_result}
                    isFixed={bug.is_fixed}
                  />
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}

export default Application;
