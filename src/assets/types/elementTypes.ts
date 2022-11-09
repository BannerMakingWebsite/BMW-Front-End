export interface FigureDataType {
  id: string;
  type: string;
  width: number;
  height: number;
  posX: number;
  posY: number;
  sequence: number;
  flipX: boolean;
  flipY: boolean;
  opacity: number;
  color: string;
  borderColor: string;
  shadowColor: string;
}

type TextStyleType = "underline" | "line-through" | "italic" | "bold" | "unset";

export interface TextDataType {
  id: string;
  type: string;
  width: number;
  height: number;
  posX: number;
  posY: number;
  sequence: number;
  flipY: boolean;
  flipX: boolean;
  opacity: number;
  fontFamily: string;
  fontSize: number;
  fontAlign: string;
  fontStyle: TextStyleType;
  color: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  shadowColor: string;
  shadowDirection: number;
  shadowDistance: number;
  shadowOpacity: number;
  value: string;
}