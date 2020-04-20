import React, { Component } from "react";
import jwt from "jsonwebtoken";
// helpers
import { getToken } from "../helpers/tokenService";
import { TOKEN_TYPE, TOKEN_LABEL } from "./../constants/";

const UserInfoContext = React.createContext();

class UserInfoProvider extends Component {
  state = {
    userId: {},
  };
  async componentDidMount() {
    if (!localStorage.id_token) {
      return this.setState({ userId: "" });
    }
    const { id = "" } = await getToken(TOKEN_LABEL[TOKEN_TYPE.id_token]);
    const userId = jwt.decode(id);
    return this.setState({ userId: userId });
  }
  render() {
    return <UserInfoContext.Provider value={this.state}>{this.props.children}</UserInfoContext.Provider>;
  }
}

export default UserInfoContext;

export { UserInfoProvider };
