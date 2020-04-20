import { TOKEN_TYPE, TOKEN_LABEL } from "./../constants";

export const setToken = (token) => {
  localStorage.setItem(TOKEN_LABEL[TOKEN_TYPE.id_token], token);
};

export const getToken = (tokenString) => {
  return localStorage.getItem(tokenString);
};

export const removeToken = (tokenString) => {
  localStorage.removeItem(tokenString);
};
