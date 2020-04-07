import React, { Component } from "react";
import s from "./Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
  render() {
    const { query, isShowCreateAppModal } = this.state;
    return (
      <section className={s.home}>
        <h2>projects will be displayed here</h2>
        <div className={s.home_search_bar_container}>
          <FontAwesomeIcon icon={faPlus} className={s.icon} />
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
