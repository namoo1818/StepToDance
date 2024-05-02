import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (name, value, options = {}) => {
  const defaultOptions = {
    path: '/',
    ...options
  };
  return cookie.set(name, value, defaultOptions);
};

export const getCookie = (name) => {
  return cookie.get(name);
};


export const removeCookie = (name, options = {}) => {
  const defaultOptions = {
    path: '/',
    ...options
  };
  return cookie.remove(name, defaultOptions);
};
