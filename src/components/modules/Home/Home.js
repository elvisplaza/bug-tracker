import React, { Component } from "react";
import s from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// components
import { ToolTip, ReactModal, AppCard } from "./../../ui/";
import { CreateNewApp, SearchBar } from "./../../modules/";

// helpers
import * as appAPI from "./../../../helpers/apiHelpers/app";
import * as userAPI from "./../../../helpers/apiHelpers/user";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isShowCreateAppModal: false,
      _query: "",
      _apps: [],
      _userId: "",
      _orgId: "",
    };
  }
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.onGetAllApps(userId);
  }

  onGetAllApps = async (userId) => {
    const { data: userInfo } = await userAPI.onGetUserById({ id: userId });

    return this.setState({
      _apps: userInfo.company_apps,
      _userId: userId,
      _orgId: userInfo.organization_id,
    });
  };

  onShowModal = (e) => {
    return this.setState((prevState) => ({
      _isShowCreateAppModal: !prevState._isShowCreateAppModal,
    }));
  };
  render() {
    const { _isShowCreateAppModal, _apps, _orgId, _userId } = this.state;
    return (
      <section className={s.home}>
        <h2>Apps will be displayed here</h2>
        <div className={s.home_search_bar_container}>
          <ToolTip text='Create new app' onClick={this.onShowModal} right>
            <FontAwesomeIcon icon={faPlus} className={s.icon} />
          </ToolTip>
          <ReactModal isOpen={_isShowCreateAppModal} onClose={this.onShowModal}>
            <CreateNewApp orgId={_orgId} userId={_userId} />
          </ReactModal>
          <SearchBar userId={_userId} />
        </div>
        <div className={s.home_app_container}>
          {_apps.length > 0
            ? _apps.map((app) => {
                return <AppCard name={app.name} appId={app.id} key={app.id} />;
              })
            : "you Company does not have any application started :( "}
        </div>
      </section>
    );
  }
}

export default Home;
