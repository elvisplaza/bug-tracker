import axios from "axios";

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
