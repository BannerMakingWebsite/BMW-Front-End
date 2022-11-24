import { instance } from "../utils/instance";

export const BookmarkTemplate = async (id: number) => {
  const response = await instance.post(`/template/bookmark/${id}`);
  return response;
};
export const UnBookmarkTemplate = async (id: number) => {
  const response = await instance.delete(`/template/bookmark/${id}`);
  return response;
};

export const LikeTemplate = async (id: number) => {
  const response = await instance.post(`/template/like/${id}`);
  return response;
};
export const UnLikeTemplate = async (id: number) => {
  const response = await instance.delete(`/template/like/${id}`);
  return response;
};
