import axios from "axios";
import { getToken } from "./../tokenService.js";

// constants
import { TOKEN_TYPE, TOKEN_LABEL } from "./../../constants";

const url = "http://localhost:3001";
const header = {
  headers: {
    Authorization: `Bearer ${getToken(TOKEN_LABEL[TOKEN_TYPE.id_token])}`,
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
