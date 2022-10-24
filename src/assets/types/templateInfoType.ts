import { CommentType } from "./commentType";

export interface TemplateInfoTypes {
  id: number;
  title: string;
  tags: string[];
  author: string;
  date: string;
  like: number;
  favorite: number;
  comments: CommentType[];
}
