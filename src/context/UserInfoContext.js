import React, { Component } from "react";
import { getToken } from "../helpers/tokenService";
import jwt from "jsonwebtoken";
const UserInfoContext = React.createContext();

class UserInfoProvider extends Component {
  state = {
    userId: {},
  };
  async componentDidMount() {
    const {
      user: { id },
    } = await jwt.decode(getToken("id_token"));

    return this.setState({ userId: id });
  }
  render() {
    return <UserInfoContext.Provider value={this.state}>{this.props.children}</UserInfoContext.Provider>;
  }
}

export default UserInfoContext;

export { UserInfoProvider };
