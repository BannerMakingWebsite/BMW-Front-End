import styled from "styled-components";

function Header() {
  return <Background></Background>;
}
export default Header;

const Background = styled.div`
  z-index: 900;
  position: fixed;
  height: 4rem;
  width: 100vw;
  left: 0px;
  top: 0px;
  background-color: ${({ theme }) => theme.colors.bg5f};
`;
