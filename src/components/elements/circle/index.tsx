import styled from "styled-components";
import ElementWrapper from "..";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { FigureDataType } from "../../../assets/types/elementTypes";

function Circle({ width, height, posX, posY, ...props }: FigureDataType) {
  const SizeProps = {
    width,
    height,
    posX,
    posY,
  };
  const id = props.id;
  const type = props.type;

  return (
    <ElementWrapper props={{ ...SizeProps, id, type }}>
      <Wrapper {...props}></Wrapper>
    </ElementWrapper>
  );
}

export default Circle;

const Wrapper = styled.div<{
  color: string;
  borderColor: string;
  opacity: number;
  shadowColor: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  ${(props) =>
    props.borderColor != "" ? "border: 1px solid " + props.borderColor : ""};
  opacity: ${(props) => props.opacity / 100};
  ${(props) =>
    props.shadowColor
      ? `box-shadow: ${pxToRem(5)}rem ${pxToRem(5)}rem ${pxToRem(5)}rem
    ${props.shadowColor}`
      : ""};
`;
