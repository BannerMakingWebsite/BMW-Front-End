import styled from "styled-components";
import ElementWrapper from "..";
import { FigureDataType } from "../../../assets/types/elementTypes";

function Square({ width, height, posX, posY, ...props }: FigureDataType) {
  const SizeProps = {
    width,
    height,
    posX,
    posY,
  };
  const id = props.id;
  return (
    <ElementWrapper props={{...SizeProps,id}}>
      <Wrapper {...props}></Wrapper>
    </ElementWrapper>
  );
}

export default Square;

const Wrapper = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
`;
