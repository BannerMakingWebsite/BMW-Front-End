import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import SidebarButton from "../button";
import Head from "../head";

function LoginTab() {
  return (
    <Background>
      <Head type="title" title="계정" />
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
