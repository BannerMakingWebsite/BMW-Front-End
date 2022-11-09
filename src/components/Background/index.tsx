import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import Board from "../board";

interface BackgroundProps {
  children: ReactNode;
}

function Background({ children }: BackgroundProps) {
  const location = useLocation();
  return (
    <BackgroundWrapper isMain={location.pathname == "/"}>
      {children}
    </BackgroundWrapper>
  );
}

export default Background;

const BackgroundWrapper = styled.div<{ isMain: boolean }>`
  background-color: ${({ theme }) => theme.colors.bg3f};
  position: absolute;
  right: 0;
  bottom: 0;
  width: calc(100vw - ${pxToRem(80)}rem);
  height: calc(100vh - ${pxToRem(64)}rem);
  z-index: 100;
  padding-left: ${(props) => !props.isMain && "25%"};
  transition: 0.2s;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
