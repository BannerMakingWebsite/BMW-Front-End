import axios from "axios";
import { Cookies } from "react-cookie";
import { getCookie } from "../assets/constants/cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: getCookie("accessToken"),
  },
});
