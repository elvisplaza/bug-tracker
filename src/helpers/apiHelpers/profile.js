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
export const onCreateProfile = ({ body = {} }) => {
  const path = `${url}/profile`;
  return axios
    .post(path, body, header)
    .then((data) => {
      console.log(data, "new profile");
      return data.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const onUpdateProfileById = ({ body = {}, profileId = "" }) => {
  const path = `${url}/profile/${profileId}`;
  return axios
    .put(path, body, header)
    .then((data) => {
      console.log(data, "updated profile!");
      return data.data;
    })
    .catch((err) => {
      throw err;
    });
};
