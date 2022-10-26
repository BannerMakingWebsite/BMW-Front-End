import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";

function Header() {
  return <Background></Background>;
}
export default Header;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.bg5f};

  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: ${pxToRem(64)}rem;

  z-index: 900;
`;
