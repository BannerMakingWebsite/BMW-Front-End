import { atom } from "recoil";
import { UserType } from "../../assets/types/userType";

export const userStateAtom = atom<UserType>({
  key: "userState",
  default: {
    id: 0,
    designs: [],
    goods: [],
    bookmarks: [],
    comments: [],
    posts: [],
    email: "",
    name: "",
    imageUrl: null,
    authority: "",
    loginType: "",
  },
});
