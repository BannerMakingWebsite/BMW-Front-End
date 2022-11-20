import axios from "axios";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SignUpStateRequestType } from "../../../assets/types/signUpState/request";
import { modalStateAtom } from "../../../atoms/modalState";
import Button from "../button";
import ModalInput from "../input";
import ModalContentsLogin from "../login";
import ModalContentsPrivacy from "../Privacy";

function ModalContentsRegister() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const [signUpState, setSignUpState] = useState<SignUpStateRequestType>({
    name: "",
    password: "",
    passwordConfirm: "",
    email: "",
    authKey: "",
  });
  const [warning, setWarning] = useState<SignUpStateRequestType>({
    name: "",
    password: "",
    email: "",
  });

  const buttonRef = useRef<HTMLButtonElement>(null);

  const validateForm = (): boolean => {
    let temp: SignUpStateRequestType = Object.assign({}, warning);

    if (signUpState.name === "") {
      temp.name = "값이 입력되지 않았습니다.";
      setWarning(temp);
      return false;
    } else temp.name = "";

    if (signUpState.password === "") {
      temp.password = "값이 입력되지 않았습니다.";
      setWarning(temp);
      return false;
    } else temp.password = "";

    if (signUpState.email === "") {
      temp.email = "값이 입력되지 않았습니다.";
      setWarning(temp);
      return false;
    } else temp.email = "";

    if (
      !String(signUpState.password).match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/
      )
    ) {
      temp.password = "비밀번호 형식이 올바르지 않습니다.";
      setWarning(temp);
      return false;
    } else temp.password = "";

    if (signUpState.password !== signUpState.passwordConfirm) {
      temp.password = "비밀번호가 일치하지 않습니다.";
      setWarning(temp);
      return false;
    } else temp.password = "";

    if (
      !String(signUpState.email)
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
        .get(`${process.env.REACT_APP_BASE_URL}/signUpConfirm`, {
          params: { email: signUpState.email, authKey: signUpState.authKey },
        })
        .then(function () {
          axios
            .post(`${process.env.REACT_APP_BASE_URL}/signup`, {
              email: signUpState.email,
              name: signUpState.name,
              password: signUpState.password,
            })
            .then(function () {
              alert("성공적으로 회원 가입이 완료되었습니다.");
              setModalState({
                title: "로그인",
                modalContents: <ModalContentsLogin />,
              });
            })
            .catch(function (error) {
              let temp: SignUpStateRequestType = Object.assign({}, warning);
              alert("알 수 없는 오류가 발생하였습니다.");

              return;
            });
        })
        .catch(function (error) {
          let temp: SignUpStateRequestType = Object.assign({}, warning);
          if (error.response.status === 404) {
            temp.email = "이메일이 인증되지 않았습니다.";
            temp.password = "";
            setWarning(temp);
          } else if (error.response.status === 401) {
            temp.email = "인증 코드가 일치하지 않습니다.";
            temp.password = "";
            setWarning(temp);
          } else alert("알 수 없는 오류가 발생하였습니다.");

          return;
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
          label="닉네임"
          id="name"
          value={signUpState.name}
          warning={warning.name}
          onChange={(value) => {
            let temp: SignUpStateRequestType = Object.assign({}, signUpState);
            temp.name = value;
            setSignUpState(temp);
          }}
        />
        <ModalInput
          type="doublePassword"
          id="pw"
          value={[signUpState.password, signUpState.passwordConfirm]}
          warning={warning.password}
          onChange={(value, labelIndex) => {
            let temp: SignUpStateRequestType = Object.assign({}, signUpState);
            if (labelIndex === 0) temp.password = value;
            else if (labelIndex === 1) temp.passwordConfirm = value;
            setSignUpState(temp);
          }}
        />
        <ModalInput
          type="doubleEmail"
          id="email"
          value={[signUpState.email, signUpState.authKey]}
          warning={warning.email}
          onChange={(value, labelIndex) => {
            let temp: SignUpStateRequestType = Object.assign({}, signUpState);
            if (labelIndex === 0) temp.email = value;
            else if (labelIndex === 1) temp.authKey = value;
            setSignUpState(temp);
          }}
        />
        <ModalInput
          type="checkbox"
          label={"BMW의 *개인정보 처리방침*에 동의합니다."}
          id="agree"
          refObj={buttonRef}
          onClick={() =>
            setModalState({
              title: "개인정보 처리방침",
              modalContents: <ModalContentsPrivacy />,
            })
          }
        />

        <Button type="big" label="회원가입" refObj={buttonRef} />
      </Background>
    </>
  );
}

export default ModalContentsRegister;

const Background = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
`;
