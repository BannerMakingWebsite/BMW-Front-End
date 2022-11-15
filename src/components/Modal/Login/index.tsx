import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import Button from "../button";
import ModalInput from "../input";
import { useRecoilState } from "recoil";
import { modalStateAtom } from "../../../atoms/modalState";
import ModalContentsRegister from "../register";
import ModalContentsVerifyEmail from "../verifyEmail";

function ModalContentsLogin() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  return (
    <>
      <Background>
        <ModalInput type="big" label="이메일" id="email" />
        <ModalInput type="password" label="비밀번호" id="pw" />
        <ModalInput type="checkbox" label="아이디 기억" id="remember" />
        <Button type="big" label="로그인" />
        <Button type="googleLogin" />
        <ExternalWrapper>
          <span>계정이 없으시다면?</span>
          <strong
            onClick={() => {
              setModalState({
                title: "회원가입",
                modalContents: <ModalContentsRegister />,
              });
            }}
          >
            회원가입
          </strong>
        </ExternalWrapper>
        <ExternalWrapper>
          <strong
            onClick={() => {
              setModalState({
                title: "비밀번호 재설정",
                modalContents: <ModalContentsVerifyEmail />,
              });
            }}
          >
            비밀번호를 잊으셨나요?
          </strong>
        </ExternalWrapper>
      </Background>
    </>
  );
}

export default ModalContentsLogin;

const Background = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
`;

const ExternalWrapper = styled.div`
  margin-top: ${pxToRem(25)}rem;

  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.subTitle};

  span {
    margin-right: ${pxToRem(8)}rem;
  }

  strong {
    text-decoration: underline;

    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;
