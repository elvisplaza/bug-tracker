import React, { Component } from "react";
import s from "./SearchBar.module.css";

// helpers
import history from "./../../../helpers/history";
import querystring from "querystring";
import * as userAPI from "./../../../helpers/apiHelpers/user";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _query: "",
      _name: "name",
      _results: [],
    };
  }
  componentDidMount() {
    console.log("history", history);
  }
  onHandleChange = (e) => {
    const { value, id } = e.target;
    const { userId } = this.props;

    return this.setState(
      {
        [id]: value,
      },
      async () => {
        const queryObj = {
          name: value,
        };
        const { data: results } = await userAPI.onGetAllAppByUserId({ queryObj, userId });
        return this.setState({
          _results: results,
        });
      }
    );
  };

  // onHandleQuery = (e) => {
  //   const { _name } = this.state;
  //   const { value } = e.target;
  //   history.push(`${history.location.pathname}?${querystring.stringify({ name: value })}`);

  //   return this.setState({
  //     _query: value,
  //   });
  // };

  render() {
    const { _query, _results } = this.state;
    return (
      <section className={s.search_bar}>
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
        <div className={s.search_bar_result_container}>
          <ul className={s.results_container}>
            {_results.length > 0
              ? _results.map((app) => {
                  return <li className={s.results_li}>app name: {app.name}</li>;
                })
              : null}
          </ul>
        </div>
      </section>
    );
  }
}
export default SearchBar;
