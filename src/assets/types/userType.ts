import { TemplateInfoTypes } from "./templateInfoType";

export interface UserType {
  username: string;
  email: string;
  pfp: string;
  uploads: TemplateInfoTypes[];
  favorites: TemplateInfoTypes[];
}
