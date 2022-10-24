import { UserType } from "./userType";

export interface CommentType {
  id: number;
  user: UserType;
  date: string;
  comment: string;
}
