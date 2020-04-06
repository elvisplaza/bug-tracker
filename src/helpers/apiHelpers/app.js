import axios from "axios";

const url = "http://localhost:3001";

export const onCreateApp = ({ body }) => {
  const path = `${url}/app`;
  return axios
    .post(path, body)
    .then(data => {
      return data.data;
    })
    .catch(err => {
      throw err;
    });
};