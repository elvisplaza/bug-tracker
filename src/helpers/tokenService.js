export const setToken = token => {
  localStorage.setItem("token", token);
};

export const getToken = token => {
  localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
