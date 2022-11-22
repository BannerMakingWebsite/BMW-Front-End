import { TemplateInfoTypes } from "./templateInfoType";

export interface UserType {
  id: number;
  designs: any[];
  goods: any[];
  bookmarks: any[];
  comments: any[];
  posts: any[];
  email: string;
  name: string;
  imageUrl: any;
  authority: string;
  loginType: string;
}
