import React, { Component } from "react";
import s from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// components
import { ToolTip, ReactModal } from "./../../ui/";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCreateAppModal: false,
      query: "",
    };
  }
  onHandleChange = (e) => {
    const { value, id } = e.target;
    return this.setState({
      [id]: value,
    });
  };

  onShowModal = (e) => {
    console.log(e.target.id);
    return this.setState((prevState) => ({
      isShowCreateAppModal: !prevState.isShowCreateAppModal,
    }));
  };
  render() {
    const { query, isShowCreateAppModal } = this.state;
    return (
      <section className={s.home}>
        <h2>Apps will be displayed here</h2>
        <div className={s.home_search_bar_container}>
          <ToolTip text='Create new app' onClick={this.onShowModal} right>
            <FontAwesomeIcon icon={faPlus} className={s.icon} />
          </ToolTip>
          <ReactModal isOpen={isShowCreateAppModal} onClose={this.onShowModal}>
            <h2>i'm a modal!</h2>
          </ReactModal>
          <form className={s.home_form}>
            <label htmlFor='query'>
              <input
                type='text'
                id='query'
                value={query}
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
