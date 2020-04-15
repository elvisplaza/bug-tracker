import React, { Component } from "react";
import { getToken } from "../helpers/tokenService";
import jwt from "jsonwebtoken";

// helpers
import * as userAPI from "./../helpers/apiHelpers/user";

const UserInfoContext = React.createContext();

class UserInfoProvider extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const {
      user: { id },
    } = jwt.decode(getToken("id_token"));
    const { data: user } = await userAPI.onGetUserById({ id });
    return this.setState({ user: { ...user } });
  }
  render() {
    return <UserInfoContext.Provider value={this.state.user}>{this.props.children}</UserInfoContext.Provider>;
  }
}

export default UserInfoContext;

export { UserInfoProvider };
