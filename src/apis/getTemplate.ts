import { instance } from "../utils/instance";

export const getPoplarTemplate = async () => {
  const response = await instance.get("/template/popular");
  return response.data;
};

export const getTemplateList = async () => {
  const response = await instance.get("/template/list");
  return response.data;
};
export const getBookmarkList = async () => {
  const response = await instance.get("/template/bookmark/list");
  return response.data;
};
export const getMyList = async () => {
  const response = await instance.get("/mypage");
  return response.data.posts;
};
