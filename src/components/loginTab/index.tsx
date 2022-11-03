import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import SidebarButton from "../Sidebar/button";

function LoginTab() {
  return (
    <Background>
      <TitleWrapper>
        <h1>계정</h1>
      </TitleWrapper>
      <SidebarButton label="로그인" />
      <SidebarButton label="회원가입" />
    </Background>
  );
}

export default LoginTab;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.bg3f};
  width: ${pxToRem(487)}rem;
  height: 100%;

  display: inline-flex;
  flex-direction: column;

  border-right: ${pxToRem(32)}rem solid ${({ theme }) => theme.colors.bg4f};

  button {
    margin: 0 auto;
    margin-top: ${pxToRem(25)}rem;
  }
`;

const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2f};

  padding: ${pxToRem(25)}rem;

  width: ${pxToRem(487)}rem;
  height: ${pxToRem(88)}rem;

  display: flex;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  }
`;
