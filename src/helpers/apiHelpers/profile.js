import axios from "axios";

// helpers
import { stringify } from "./../stringify";

const url = "http://localhost:3001";

export const onCreateProfile = ({ body = {} }) => {
  const path = `${url}/profile`;
  return axios
    .post(path, body)
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
    .put(path, body)
    .then((data) => {
      console.log(data, "updated profile!");
      return data.data;
    })
    .catch((err) => {
      throw err;
    });
};
