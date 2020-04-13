import React, { Component } from "react";
import s from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// components
import { ToolTip, ReactModal } from "./../../ui/";
import { CreateNewApp } from "./../../modules/";

// helpers
import * as appAPI from "./../../../helpers/apiHelpers/app";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isShowCreateAppModal: false,
      _query: "",
      _orgId: "91cb78f0-7d9d-11ea-9af7-6b43b194c2c2",
      _apps: [],
    };
  }
  componentDidMount() {
    this.onGetAllApps();
  }
  onGetAllApps = async () => {
    const { _orgId } = this.state;
    console.log(_orgId, "i'm getting apps!");
    const apps = await appAPI.onGetAllAppsByOrgId({ orgId: _orgId });
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
    const { _query, _isShowCreateAppModal } = this.state;
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
      </section>
    );
  }
}

export default Home;
