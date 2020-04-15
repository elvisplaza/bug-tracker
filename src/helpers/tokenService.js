export const setToken = (token) => {
  localStorage.setItem("id_token", token);
};

export const getToken = (token) => {
  return localStorage.getItem(token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
