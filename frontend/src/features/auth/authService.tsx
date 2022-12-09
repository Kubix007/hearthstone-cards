import {
  IRegisterUserData,
  ILoginUserData,
  IAccessToken,
} from "../../shared/types";
import axios from "axios";
import tokenService from "../token/tokenService";

const API_URL = "/api/users/";

//Register user
const register = async (userData: IRegisterUserData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async (userData: ILoginUserData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    const API_TOKEN: IAccessToken = await tokenService.getAccessToken();
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", API_TOKEN.access_token);
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
