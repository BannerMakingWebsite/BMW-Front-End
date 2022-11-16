import { useRecoilState } from "recoil";
import styled from "styled-components";
import { FigureDataType, TextDataType } from "../../assets/types/elementTypes";
import ElementListState from "../../atoms/elementState";
import ElementWrapper from "../elements";
import Block from "../elements";
import Circle from "../elements/circle";
import Square from "../elements/square";
import Text from "../elements/text";
import Triangle from "../elements/triangle";

interface Props {
  width: number;
  height: number;
}

const tempTextData: TextDataType = {
  id: "asdf",
  type: "text",
  width: 100,
  backgroundColor: "blue",
  borderColor: "red",
  borderWidth: 1,
  color: "black",
  flipX: false,
  flipY: false,
  fontAlign: "flex-end",
  fontFamily: "unset",
  fontSize: 13,
  fontStyle: ["unset"],
  height: 100,
  opacity: 1,
  posX: 0,
  posY: 0,
  shadowColor: "white",
  shadowDirection: 0,
  shadowDistance: 0,
  shadowOpacity: 0,
  value: "기본값",
};

const tempFigureData: FigureDataType = {
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
  opacity: 1,
  shadowColor: "none",
};

function Board({ height, width }: Props) {
  const [elementList] = useRecoilState(ElementListState);
  return (
    <TotalWrapper height={height} width={width}>
      {elementList.map((value, index) => {
        switch (value.type) {
          case "circle":
            return <Circle {...value} />;
          case "square":
            return <Square {...value} />;
          case "triangle":
            return <Triangle {...value} />;
          case "text":
            return <Text {...(value as TextDataType)} />;
        }
      })}
    </TotalWrapper>
  );
}

export default Board;

const TotalWrapper = styled.div<{ width: number; height: number }>`
  border: 1px solid black;
  aspect-ratio: ${(props) => props.width + "/" + props.height};
  max-width: 1000px;
  max-height: 800px;
  width: ${(props) => props.width}px;
  background-color: white;
  position: absolute;
`;
