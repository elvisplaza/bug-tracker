import React, { Component } from "react";
import cx from "classnames";
import s from "./Application.module.css";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: "",
    };
  }
  render() {
    return <section>I am the new app!</section>;
  }
}

export default Application;
