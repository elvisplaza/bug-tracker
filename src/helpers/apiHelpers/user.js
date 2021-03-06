import axios from "axios";
import querystring from "querystring";
// helpers

import { getToken } from "./../tokenService.js";
// constants
import { TOKEN_TYPE, TOKEN_LABEL } from "./../../constants";

const url = "http://localhost:3001";
const header = {
  headers: {
    Authorization: `Bearer ${getToken(TOKEN_LABEL[TOKEN_TYPE.id_token])}`,
  },
};

export const onCreateUser = ({ body = {} }) => {
  const path = `${url}/user`;
  return axios
    .post(path, body, header)
    .then((data) => {
      console.log(data, "created a new user");
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const onGetUser = ({ email = "", password = "" }) => {
  const path = `${url}/user?${querystring.stringify({ email, password })}`;
  return axios
    .get(path, header)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const onGetUserById = ({ id }) => {
  const path = `${url}/user/app/${id}`;

  return axios.get(path, header).then((data) => {
    console.log("dataaa from getting user by id", data.data);
    return data.data;
  });
};

export const onLogin = ({ body }) => {
  const path = `${url}/account/login`;
  return axios
    .post(path, body)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const onGetAllAppByUserId = ({ queryObj, userId }) => {
  const path = `${url}/user/app/${userId}/all?${querystring.stringify(queryObj)}`;
  console.log(path);
  return axios
    .get(path, header)
    .then((data) => {
      console.log("search query results", data.data);
      return data.data;
    })
    .catch((err) => {
      throw err;
    });
};
