import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import Button from "../button";
import ModalInput from "../input";
import { useRecoilState } from "recoil";
import { modalStateAtom } from "../../../atoms/modalState";
import ModalContentsRegister from "../register";
import ModalContentsVerifyEmail from "../verifyEmail";
import axios from "axios";
import { LoginResponseType } from "../../../assets/types/login/response";
import { useState } from "react";
import { LoginRequestType } from "../../../assets/types/login/request";
import * as C from "../../../assets/constants/cookie";

function ModalContentsLogin() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const [loginState, setLoginState] = useState<LoginRequestType>({
    email: "",
    password: "",
  });
  const [warning, setWarning] = useState<LoginRequestType>({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    axios
      .post<LoginResponseType>(`${process.env.REACT_APP_BASE_URL}/bmw`, {
        email: loginState.email,
        password: loginState.password,
      })
      .then((response) => {
        C.setCookie("accessToken", response.data.accessToken, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
        C.setCookie("refreshToken", response.data.refreshToken, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
        alert("성공적으로 로그인이 완료되었습니다.");
        setModalState({
          title: "",
          modalContents: null,
        });
      })
      .catch(function (error) {
        console.error(error);
        alert("알 수 없는 오류가 발생하였습니다.");
      });
  };

  return (
    <>
      <Background
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <ModalInput
          type="big"
          label="이메일"
          id="email"
          value={loginState.email}
          warning={warning.email}
          onChange={(value) => {
            let temp: LoginRequestType = Object.assign({}, loginState);
            temp.email = value;
            setLoginState(temp);
          }}
        />
        <ModalInput
          type="password"
          label="비밀번호"
          id="pw"
          value={loginState.password}
          warning={warning.password}
          onChange={(value) => {
            let temp: LoginRequestType = Object.assign({}, loginState);
            temp.password = value;
            setLoginState(temp);
          }}
        />
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
