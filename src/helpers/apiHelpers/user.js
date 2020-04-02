import axios from "axios";

// helpers
import { stringify } from "./../stringify";
const url = "http://localhost:3001";

export const onCreateUser = ({ body = {} }) => {
  const path = `${url}/user`;
  return axios
    .post(path, body)
    .then(data => {
      console.log(data, "created a new user");
      return data;
    })
    .catch(err => {
      throw err;
    });
};

export const onGetUser = ({ email = "", password = "" }) => {
  const path = `${url}/user?${stringify({ email, password })}`;
  return axios
    .get(path)
    .then(data => {
      return data.data;
    })
    .catch(err => {
      throw err;
    });
};
