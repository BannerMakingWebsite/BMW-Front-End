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
import { loadUser } from "../../../apis/loadUser";
import { userStateAtom } from "../../../atoms/userState";

function ModalContentsLogin() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const [loginState, setLoginState] = useState<LoginRequestType>({
    email: "",
    password: "",
  });
  const [warning, setWarning] = useState<LoginRequestType>({
    email: "",
    password: "",
  });

  const validateForm = (): boolean => {
    let temp: LoginRequestType = Object.assign({}, warning);

    if (loginState.password === "") {
      temp.password = "값이 입력되지 않았습니다.";
      setWarning(temp);
      return false;
    } else temp.password = "";

    if (loginState.email === "") {
      temp.email = "값이 입력되지 않았습니다.";
      setWarning(temp);
      return false;
    } else temp.email = "";

    if (
      !String(loginState.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      temp.email = "이메일의 형식이 올바르지 않습니다.";
      setWarning(temp);
      return false;
    } else temp.email = "";

    setWarning(temp);
    return true;
  };

  const onSubmit = () => {
    if (validateForm())
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
          loadUser(setUserState);
          alert("성공적으로 로그인이 완료되었습니다.");
          setModalState({
            title: "",
            modalContents: null,
          });
        })
        .catch(function (error) {
          let temp: LoginRequestType = Object.assign({}, warning);
          if (error.response.status === 404) {
            temp.email = "해당 이메일로 가입된 계정이 존재하지 않습니다.";
            temp.password = "";
          } else if (error.response.status === 401) {
            temp.password = "비밀번호가 일치하지 않습니다.";
            temp.email = "";
          } else {
            alert("알 수 없는 오류가 발생하였습니다.");
            return;
          }
          setWarning(temp);
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
