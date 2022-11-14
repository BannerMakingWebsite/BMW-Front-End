import { atom } from "recoil";

export interface modalStateAtomType {
  title: string;
  modalContents: JSX.Element;
}

export const modalStateAtom = atom<modalStateAtomType>({
  key: "modalState",
  default: {
    title: "",
    modalContents: null,
  },
});
