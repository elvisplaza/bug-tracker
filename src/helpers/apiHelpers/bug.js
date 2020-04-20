import axios from "axios";
import { getToken } from "./../tokenService.js";
// helpers
import { stringify } from "./../stringify";

const url = "http://localhost:3001";
const header = {
  headers: {
    Authorization: `Bearer ${getToken("id_token")}`,
  },
};
export const onCreateBug = ({ body = {} }) => {
  const path = `${url}/bug`;
  return axios
    .post(path, body, header)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw err;
    });
};
