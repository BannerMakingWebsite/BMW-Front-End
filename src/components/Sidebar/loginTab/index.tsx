import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { modalStateAtom } from "../../../atoms/modalState";
import ModalContentsLogin from "../../Modal/Login";
import ModalContentsRegister from "../../Modal/register";
import SidebarButton from "../button";
import Head from "../head";

function LoginTab() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  return (
    <Background>
      <Head type="title" title="계정" />
      <ContentWrapper>
        <SidebarButton
          label="로그인"
          onClick={() =>
            setModalState({
              title: "로그인",
              modalContents: <ModalContentsLogin />,
            })
          }
        />
        <SidebarButton
          label="회원가입"
          onClick={() => {
            setModalState({
              title: "회원가입",
              modalContents: <ModalContentsRegister />,
            });
          }}
        />
      </ContentWrapper>
    </Background>
  );
}

export default LoginTab;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.bg3f};

  position: fixed;
  left: 5rem;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 100;
`;

const ContentWrapper = styled.div`
  padding-bottom: ${pxToRem(24)}rem;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  > button {
    margin-top: ${pxToRem(25)}rem;
  }
`;
