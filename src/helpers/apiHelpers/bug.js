import axios from "axios";

// helpers
import { stringify } from "./../stringify";

const url = "http://localhost:3001";

export const onCreateBug = ({ body = {} }) => {
  const path = `${url}/bug`;
  return axios
    .post(path, body)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw err;
    });
};
