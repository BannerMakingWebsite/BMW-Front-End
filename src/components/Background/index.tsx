import { ReactNode } from "react";
import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";

interface BackgroundProps {
  children: ReactNode;
}

function Background({ children }: BackgroundProps) {
  return <BackgroundWrapper>{children}</BackgroundWrapper>;
}

export default Background;

const BackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg3f};

  position: fixed;
  right: 0;
  bottom: 0;

  width: calc(100vw - ${pxToRem(80)}rem);
  height: calc(100vh - ${pxToRem(64)}rem);

  z-index: 900;
`;
