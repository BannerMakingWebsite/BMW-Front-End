import { atom } from "recoil";
import { FigureDataType, TextDataType } from "../../assets/types/elementTypes";

export const ElementListState = atom<(FigureDataType | TextDataType)[]>({
  key: "ElementList",
  default: [
    {
      id: "askdlfhsadkf",
      type: "circle",
      height: 100,
      width: 100,
      posX: 0,
      posY: 0,
      flipX: false,
      flipY: false,
      color: "green",
      borderColor: "red",
      opacity: 100,
      shadowColor: "",
    },
    {
      id: "1123",
      type: "triangle",
      height: 100,
      width: 100,
      posX: 0,
      posY: 0,
      flipX: false,
      flipY: false,
      color: "green",
      borderColor: "red",
      opacity: 100,
      shadowColor: "",
    },
    {
      id: "asdf",
      type: "text",
      width: 100,
      height: 100,
      posX: 0,
      posY: 0,
      flipX: false,
      flipY: false,
      color: "black",
      backgroundColor: "blue",
      borderColor: "red",
      borderWidth: 1,
      fontAlign: "flex-end",
      fontFamily: "unset",
      fontSize: 13,
      fontStyle: ["unset"],
      opacity: 100,
      shadowColor: "white",
      shadowDirection: 0,
      shadowDistance: 0,
      shadowOpacity: 0,
      value: "기본값",
    },
  ],
});

export const CurrentElementState = atom<string>({
  key: "CurrentElement",
  default: "1123",
});

export default ElementListState;
