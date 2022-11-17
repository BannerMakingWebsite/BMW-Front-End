import { atom } from "recoil";
import { FigureDataType, TextDataType } from "../../assets/types/elementTypes";

export const ElementListState = atom<(FigureDataType | TextDataType)[]>({
  key: "ElementList",
  default: [],
});

export const CurrentElementState = atom<string>({
  key: "CurrentElement",
  default: "1123",
});

export const BoardSizeState = atom<{ width: number; height: number }>({
  key: "BoardSize",
  default: {
    width: 1920,
    height: 1080,
  },
});

export const AutoSaveState = atom<number>({
  key: "AutoSave",
  default: 1,
});

export const CaptureRefState = atom<React.MutableRefObject<HTMLDivElement>>({
  key: "CaptureRef",
  default: null,
});

export default ElementListState;
