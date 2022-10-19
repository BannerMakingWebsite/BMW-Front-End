import { ReactNode } from "react";
import styled from "styled-components";
interface Props {
  children: ReactNode;
}

function Background({ children }: Props) {
  return <BackgroundWrapper>{children}</BackgroundWrapper>;
}
export default Background;

const BackgroundWrapper = styled.div`
  z-index: 900;
  position: fixed;
  height: calc(100vh - 4rem);
  width: calc(100vw - 5rem);
  right: 0px;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.bg3f};
`;
