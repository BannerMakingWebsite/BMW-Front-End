import { useRecoilState } from "recoil";
import styled from "styled-components";
import { FigureDataType, TextDataType } from "../../assets/types/elementTypes";
import ElementListState from "../../atoms/elementState";
import Capture from "../capture";
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

function Board({ height, width }: Props) {
  const [elementList] = useRecoilState(ElementListState);
  return (
    <Capture>
      <TotalWrapper height={height} width={width}>
        {elementList.map((value, index) => {
          switch (value.type) {
            case "circle":
              return <Circle {...value} key={index} />;
            case "square":
              return <Square {...value} key={index} />;
            case "triangle":
              return <Triangle {...value} key={index} />;
            case "text":
              return <Text {...(value as TextDataType)} key={index} />;
          }
        })}
      </TotalWrapper>
    </Capture>
  );
}

export default Board;

const TotalWrapper = styled.div<{ width: number; height: number }>`
  aspect-ratio: ${(props) => props.width + "/" + props.height};
  max-width: 1000px;
  max-height: 800px;
  width: ${(props) => props.width}px;
  background-color: white;
  position: absolute;
  bottom: 0;
`;
