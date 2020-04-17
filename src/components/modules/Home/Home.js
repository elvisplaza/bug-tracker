import React, { Component } from "react";
import s from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// components
import { ToolTip, ReactModal, AppCard } from "./../../ui/";
import { CreateNewApp } from "./../../modules/";

// helpers
import * as appAPI from "./../../../helpers/apiHelpers/app";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isShowCreateAppModal: false,
      _query: "",
      _orgId: "338bdcf0-7e7c-11ea-90ac-f11f3c2c64e1",
      _apps: [],
    };
  }
  componentDidMount() {
    this.onGetAllApps();
  }
  onGetAllApps = async () => {
    const { _orgId } = this.state;
    console.log(_orgId, "i'm getting apps!");
    const { data: apps } = await appAPI.onGetAllAppsByOrgId({ orgId: _orgId });
    return this.setState({
      _apps: apps,
    });
  };
  onHandleChange = (e) => {
    const { value, id } = e.target;
    return this.setState({
      [id]: value,
    });
  };

  onShowModal = (e) => {
    console.log(e.target.id);
    return this.setState((prevState) => ({
      _isShowCreateAppModal: !prevState._isShowCreateAppModal,
    }));
  };
  render() {
    const { _query, _isShowCreateAppModal, _apps } = this.state;
    return (
      <section className={s.home}>
        <h2>Apps will be displayed here</h2>
        <div className={s.home_search_bar_container}>
          <ToolTip text='Create new app' onClick={this.onShowModal} right>
            <FontAwesomeIcon icon={faPlus} className={s.icon} />
          </ToolTip>
          <ReactModal isOpen={_isShowCreateAppModal} onClose={this.onShowModal}>
            <CreateNewApp />
          </ReactModal>
          <form className={s.home_form}>
            <label htmlFor='query'>
              <input
                type='text'
                id='_query'
                value={_query}
                onChange={this.onHandleChange}
                className={s.home_form_input}
              />
            </label>
          </form>
        </div>
        <div className={s.home_app_container}>
          {_apps.length > 0
            ? _apps.map((app) => {
                return <AppCard name={app.name} appId={app.id} />;
              })
            : "you Company does not have any application started :( "}
        </div>
      </section>
    );
  }
}

export default Home;
