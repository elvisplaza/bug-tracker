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

export const onCreateApp = ({ body }) => {
  const path = `${url}/app`;
  return axios
    .post(path, body, header)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const onGetAppById = ({ appId = "" }) => {
  const path = `${url}/app/appId/${appId}`;
  return axios.get(path, header).then((data) => {
    return data.data;
  });
};

export const onGetAllAppsByOrgId = ({ orgId = "" }) => {
  const path = `${url}/app/${orgId}`;
  return axios.get(path, header).then((data) => {
    console.log("im bringing you all the apps", data.data);
    return data.data;
  });
};
