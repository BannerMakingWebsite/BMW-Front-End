import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import html2canvas from "html2canvas";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { BoardSizeState, CaptureRefState } from "../../atoms/elementState";

interface Props {
  children: ReactNode;
}

function Capture({ children }: Props) {
  const [CaptureRef, setRef] = useRecoilState(CaptureRefState);
  const [size] = useRecoilState(BoardSizeState);
  const printRef = React.useRef(null);

  useEffect(() => {
    setRef(printRef);
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={printRef}
      >
        <Wrapper
          width={size.width}
          height={size.height}
          style={{
            position: "relative",
          }}
        >
          {children}
        </Wrapper>
      </div>
    </>
  );
}

export default Capture;

const Wrapper = styled.div<{ width: number; height: number }>`
  border: 1px solid black;
  position: absolute;
  aspect-ratio: ${(props) => props.width + "/" + props.height};
  max-width: 1000px;
  max-height: 800px;
  width: ${(props) => props.width}px;
`;
