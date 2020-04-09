import React, { Component } from "react";
import cx from "classnames";
import s from "./CreateBug.module.css";

// helpers
import { riskLevels } from "./../../../helpers/formHelpers";
import * as bugAPI from "./../../../helpers/apiHelpers/bug";
// components
import { Button } from "./../../ui/";
class CreateBug extends Component {
  constructor() {
    super();
    this.state = {
      _title: "",
      _riskLevel: "",
      _isFixed: false,
      _path: "",
      _expectedResult: "",
      _actualOutcome: "",
      _stepsToFix: "",
    };
  }
  onHandleChange = (e) => {
    const { id, value } = e.target;
    console.log("id and value", id, value);
    return this.setState({
      [id]: value,
    });
  };

  onCreateBug = async (e) => {
    e.preventDefault();
    try {
      const { data: newBug } = await bugAPI.onCreateBug({ body: this.state });
      console.log("newbug created!", newBug);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { _title, _riskLevel, _isFixed, _path, _expectedResult, _actualOutcome, _stepsToFix } = this.state;
    return (
      <section className={s.create_bug}>
        <h2>Bug Report</h2>
        <form className={s.create_bug_form} onSubmit={this.onCreateBug}>
          <label htmlFor='_title'>
            <input
              className={s.form_input}
              type='text'
              id='_title'
              onChange={this.onHandleChange}
              value={_title}
              placeholder='Bug title'
            />
          </label>
          <label htmlFor='_path'>
            <input
              className={s.form_input}
              type='text'
              id='_path'
              onChange={this.onHandleChange}
              value={_path}
              placeholder='The URL path where the bug is found'
            />
          </label>
          <label htmlFor='_expectedResult'>
            <input
              className={s.form_input}
              type='text'
              id='_expectedResult'
              onChange={this.onHandleChange}
              value={_expectedResult}
              placeholder='What is supposed to happen?'
            />
          </label>
          <label htmlFor='_actualOutcome'>
            <input
              className={s.form_input}
              type='text'
              id='_actualOutcome'
              onChange={this.onHandleChange}
              value={_actualOutcome}
              placeholder='What actually happens?'
            />
          </label>
          <label htmlFor='_riskLevel'>
            <p className={s.form_p}> Risk level</p>
            <select id='_riskLevel' onChange={this.onHandleChange} value={_riskLevel} className={s.form_select}>
              {riskLevels.map((risk) => {
                return <option value={risk.value}>{risk.name}</option>;
              })}
            </select>
          </label>
          <Button type='submit' green>
            Create Bug
          </Button>
        </form>
      </section>
    );
  }
}

export default CreateBug;
