import axios, { AxiosResponse } from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT } from "./types";

export const loginUser = async (dataTosubmit: object) => {
  let request = await axios.post("/api/users/login", dataTosubmit);
  const data = request.data;
  return {
    type: LOGIN_USER,
    payload: data,
  };
};

export const registerUser = async (dataTosubmit) => {
  let request = await axios.post("/api/users/register", dataTosubmit);
  const data = request.data;
  return {
    type: REGISTER_USER,
    payload: data,
  };
};
export const auth = async () => {
  const request = await axios.get("/api/users/auth");
  const data = request.data;
  return {
    type: AUTH_USER,
    payload: data,
  };
};

export const userLogout = async () => {
  const request = await axios.get("/api/users/logout");
  const data = request.data;
  return {
    type: LOGOUT,
    payload: data,
  };
};
