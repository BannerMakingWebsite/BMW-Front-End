import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ElementWrapper from "..";
import { FigureDataType } from "../../../assets/types/elementTypes";

function Triangle({ width, height, posX, posY, ...props }: FigureDataType) {
  const SizeProps = {
    width,
    height,
    posX,
    posY,
  };
  const id = props.id;
  const elementRef = useRef(null);
  const [{ twidth, theight }, setOffset] = useState({
    twidth: 0,
    theight: 0,
  });
  useEffect(() => {
    if (elementRef.current) {
      setOffset({
        twidth: elementRef.current.offsetWidth,
        theight: elementRef.current.offsetHeight,
      });
    }
    console.log(width, height);
  }, [elementRef.current]);
  return (
    <ElementWrapper props={{ ...SizeProps, id }}>
      <TryComponent {...props}></TryComponent>
    </ElementWrapper>
  );
}

interface TryProps {
  width?: number;
  height?: number;
  color: string;
}
function TryComponent({ height, width, color }: TryProps) {
  useEffect(() => {
    console.log(height + " solid " + color);
  }, [width]);
  return (
    <OverflowWrapper>
      <Wrapper
        color={color}
        style={{
          borderTop: width / 2 + "px solid transparent",
          borderLeft: width / 2 + "px solid transparent",
          borderRight: width / 2 + "px solid transparent",
          borderBottom: height + "px solid " + color,
        }}
      ></Wrapper>
    </OverflowWrapper>
  );
}

export default Triangle;

const OverflowWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
`;

const Wrapper = styled.div<{ color: string }>`
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;
