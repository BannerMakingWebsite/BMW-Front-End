import axios from "axios";

const BaseUrl = "ec2-3-37-129-114.ap-northeast-2.compute.amazonaws.com/bmw";

export const instance = axios.create({
  baseURL: BaseUrl,
  timeout: 10000,
});
