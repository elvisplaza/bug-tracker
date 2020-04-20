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
    console.log(TOKEN_LABEL[TOKEN_TYPE.id_token]);
    if (!localStorage[TOKEN_LABEL[TOKEN_TYPE.id_token]]) {
      return this.setState({ userId: "" });
    }
    const token = await getToken(TOKEN_LABEL[TOKEN_TYPE.id_token]);
    const {
      user: { id: userId },
    } = await jwt.decode(token);
    return this.setState({ userId: userId });
  }
  render() {
    return <UserInfoContext.Provider value={this.state}>{this.props.children}</UserInfoContext.Provider>;
  }
}

export default UserInfoContext;

export { UserInfoProvider };
