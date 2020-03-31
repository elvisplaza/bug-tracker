export const stringify = obj => {
  return Object.keys(obj)
    .map(key => key + "=" + obj[key])
    .join("&");
};
