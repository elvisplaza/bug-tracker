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

// export const onGetUser = ({ email = "", password = "" }) => {
//   const path = `${url}/user?${stringify({ email, password })}`;
//   return axios
//     .get(path)
//     .then((data) => {
//       return data.data;
//     })
//     .catch((err) => {
//       throw err;
//     });
// };

// export const onGetUserById = ({ id }) => {
//   const path = `${url}/user/${id}`;
//   return axios.get(path).then((data) => {
//     console.log("dataaa from getting user by id", data.data);
//     return data.data;
//   });
// };