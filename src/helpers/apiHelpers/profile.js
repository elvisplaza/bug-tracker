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
