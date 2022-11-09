import { atom } from "recoil";
import { FigureDataType, TextDataType } from "./assets/types/elementTypes";

export const ElementListState = atom<(FigureDataType | TextDataType)[]>({
  key: "ElementList",
  default: [
    {
      id: "askdlfhsadkf",
      type:"circle",
      height: 100,
      width: 100,
      posX: 0,
      posY: 0,
      flipX: false,
      flipY: false,
      color: "green",
      borderColor: "red",
      opacity: 1,
      sequence: 1,
      shadowColor: "none",
    },
  ],
});

export const CurrentElementState = atom<FigureDataType | TextDataType | null>({
  key: "CurrentElement",
  default: null,
});

export default ElementListState;
